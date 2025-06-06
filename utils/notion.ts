/* eslint-disable @typescript-eslint/no-explicit-any */
import { Client } from '@notionhq/client';

const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

export const NotionAPI = {
	async getFeaturedPosts() {
		try {
			const response = await notion.databases.query({
				database_id: process.env.NOTION_DATABASE_ID!,
				filter: {
					and: [
						{
							property: 'Status',
							status: {
								equals: 'Published',
							},
						},
						{
							property: 'Featured',
							checkbox: {
								equals: true,
							},
						},
					],
				},
				sorts: [
					{
						property: 'Created time',
						direction: 'descending',
					},
				],
			});
			return response.results.map((page: any) => {
				const properties = page.properties;
				return {
					id: page.id,
					title: properties.Title.title[0].plain_text || 'Untitled',
					publishDate:
						new Date(properties['Created time'].created_time).toISOString() ||
						new Date().toISOString(),
					slug: properties.Slug.unique_id.number || page.id,
					category: properties.Category.select.name || 'Uncategorized',
					author: properties.Author.select.name || 'GBLS Research Team',
					coverImage: page.cover?.file?.url || page.cover?.file?.url,
				};
			});
		} catch (error) {
			console.error('Error fetching from Notion:', error);
			throw error;
		}
	},
	async getPosts() {
		try {
			const response = await notion.databases.query({
				database_id: process.env.NOTION_DATABASE_ID!,
				filter: {
					property: 'Status',
					status: {
						equals: 'Published',
					},
				},
				sorts: [
					{
						property: 'Created time',
						direction: 'descending',
					},
				],
			});

			return response.results.map((page: any) => {
				const properties = page.properties;

				console.log(properties); // Add this line to log the properties to the console for debugging purposes
				console.log(page);

				return {
					id: page.id,
					title: properties.Title.title[0].plain_text || 'Untitled',
					publishDate:
						new Date(properties['Created time'].created_time).toISOString() ||
						new Date().toISOString(),
					slug: properties.Slug.unique_id.number || page.id,
					category: properties.Category.select.name || 'Uncategorized',
					author: properties.Author.select.name || 'GBLS Research Team',
					coverImage: page.cover?.file?.url || page.cover?.file?.url,
				};
			});
		} catch (error) {
			console.error('Error fetching from Notion:', error);
			throw error;
		}
	},

	async getPostBySlug(slug: number) {
		try {
			const response = await notion.databases.query({
				database_id: process.env.NOTION_DATABASE_ID!,
				filter: {
					and: [
						{
							property: 'Slug',
							unique_id: {
								equals: slug,
							},
						},
						{
							property: 'Status',
							status: {
								equals: 'Published',
							},
						},
					],
				},
			});

			if (response.results.length === 0) {
				return null;
			}

			const page = response.results[0] as any;
			const properties = page.properties;

			return {
				id: page.id,
				title: properties.Title?.title?.[0]?.plain_text || 'Untitled',
				publishDate:
					properties.Created?.created_time || new Date().toISOString(),
				slug: properties.Slug?.rich_text?.[0]?.plain_text || page.id,
				category: properties.Category?.select?.name || 'Uncategorized',
				author:
					properties.Author?.rich_text?.[0]?.plain_text || 'GBLS Research Team',
				coverImage:
					properties.CoverImage?.files?.[0]?.file?.url ||
					properties.CoverImage?.files?.[0]?.external?.url,
				status: properties.Status?.select?.name || 'Draft',
			};
		} catch (error) {
			console.error('Error fetching post by slug:', error);
			throw error;
		}
	},

	async getPageContent(pageId: string) {
		try {
			const response = await notion.blocks.children.list({
				block_id: pageId,
			});

			return response.results;
		} catch (error) {
			console.error('Error fetching page content:', error);
			throw error;
		}
	},
};
