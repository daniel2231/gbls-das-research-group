import Link from 'next/link';
import { NotionAPI } from '@/utils/notion';
import { BlogPost } from '@/types';
import BlogPostCard from '@/components/post-page/blogPostCard';

async function getBlogPosts(): Promise<BlogPost[]> {
	try {
		const posts = await NotionAPI.getFeaturedPosts();
		return posts.map((post) => ({
			id: post.id,
			title: post.title,
			publishDate: post.publishDate,
			slug: post.slug,
			author: post.author,
			coverImage: post.coverImage,
			category: post.category || 'Uncategorized',
		}));
	} catch (error) {
		console.error('Error fetching posts:', error);
		return [];
	}
}

export default async function Home() {
	const posts = await getBlogPosts();

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
			{/* Hero Section */}
			<main>
				<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
							Welcome to GndBros DAS Research Group
						</h1>
						<p className="mx-auto mt-3 max-w-md text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
							Here share our research findings and insights about GBLS products.
						</p>
						<div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
							<div className="rounded-md shadow">
								<Link
									href="/posts"
									className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 md:px-10 md:py-4 md:text-lg"
								>
									Read Latest Posts
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/* Featured Posts */}
				<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
					<h2 className="mb-8 text-3xl font-extrabold text-gray-900 dark:text-white">
						Featured Posts
					</h2>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{posts.map((post) => (
							<BlogPostCard key={post.id} post={post} />
						))}
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer className="bg-gray-800 dark:bg-gray-900">
				<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
					<div className="text-center text-gray-400 dark:text-gray-500">
						<p>&copy; 2024 Blog. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
