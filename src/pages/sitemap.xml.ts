import type { APIRoute } from 'astro';

const siteUrl = 'https://infradevconsulting.com';

const pages = [
	'',
	'/eor',
	'/consulting-management',
	'/contact',
	'/brochure',
	'/quality-policy',
	'/environmental-policy',
	'/cookies-policy',
	'/privacy-policy',
];

export const GET: APIRoute = () => {
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `  <url>
    <loc>${siteUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === '' ? 'weekly' : page === '/eor' || page === '/consulting-management' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : page === '/eor' || page === '/consulting-management' ? '0.9' : '0.8'}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
};

