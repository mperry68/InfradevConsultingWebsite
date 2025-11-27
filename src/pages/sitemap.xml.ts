import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const siteUrl = 'https://infradevconsulting.com';

const pages = [
	'',
	'/about',
	'/eor',
	'/consulting-management',
	'/contact',
	'/brochure',
	'/aeo',
	'/geo',
	'/blog',
	'/resources',
	'/compliance',
	'/quality-policy',
	'/environmental-policy',
	'/cookies-policy',
	'/privacy-policy',
	'/how-us-companies-hire-canada',
	'/how-us-companies-hire-canada/canadian-payroll-guide',
	'/how-us-companies-hire-canada/cra-requirements',
	'/how-us-companies-hire-canada/employment-law-basics',
	'/how-us-companies-hire-canada/why-canada-tech-talent',
	'/comparisons/eor-vs-canadian-entity',
	'/comparisons/eor-vs-contractor',
	'/comparisons/eor-canada-vs-uk',
	'/comparisons/canada-vs-us-hiring-costs',
	'/comparisons/canada-vs-india-outsourcing-quality',
	'/resources/why-outsource-to-canada',
	'/resources/how-does-hiring-model-work',
	'/resources/what-is-aeo',
	'/resources/seo-aeo-geo-complete-strategy',
];

export const GET: APIRoute = async () => {
	// Get all blog posts
	const blogPosts = await getCollection('blog');

	// Generate sitemap entries for static pages
	const staticPages = pages
		.map(
			(page) => `  <url>
    <loc>${siteUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === '' ? 'weekly' : page === '/eor' || page === '/consulting-management' || page === '/blog' || page === '/brochure' || page === '/aeo' || page === '/geo' || page === '/how-us-companies-hire-canada' || page === '/about' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : page === '/eor' || page === '/consulting-management' ? '0.9' : page === '/blog' || page === '/resources' || page === '/brochure' || page === '/aeo' || page === '/geo' || page === '/how-us-companies-hire-canada' || page === '/about' ? '0.85' : '0.8'}</priority>
  </url>`
		)
		.join('\n');

	// Generate sitemap entries for blog posts
	const blogEntries = blogPosts
		.map(
			(post) => `  <url>
    <loc>${siteUrl}/blog/${post.slug}</loc>
    <lastmod>${(post.data.updatedDate || post.data.pubDate).toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
		)
		.join('\n');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages}
${blogEntries}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
};

