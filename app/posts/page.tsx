import { Suspense } from 'react';
import { NotionAPI } from '@/utils/notion';
import FilterablePostsList from '@/components/post/filterablePostsList';
import BlogListSkeleton from '@/components/post/loadingPostList';
import { BlogPost } from '@/types';

// Server-side data fetching
async function getBlogPosts(): Promise<BlogPost[]> {
	try {
		const posts = await NotionAPI.getPosts();
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

// Server Component for Blog Content
async function BlogContent() {
	const posts = await getBlogPosts();

	if (posts.length === 0) {
		return (
			<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
				<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
					<div className="text-center py-12">
						<h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
							No posts found
						</h2>
						<p className="text-gray-600 dark:text-gray-400">
							Check back later for new content!
						</p>
					</div>
				</main>
			</div>
		);
	}

	// Pass server-fetched data to client component
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
			<FilterablePostsList initialPosts={posts} />
		</div>
	);
}

// Main Page Component (Server Component)
export default function BlogPage() {
	return (
		<Suspense fallback={<BlogPageSkeleton />}>
			<BlogContent />
		</Suspense>
	);
}

// Loading skeleton for the entire page
function BlogPageSkeleton() {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
			<div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex gap-4">
						<div className="h-10 flex-1 max-w-md bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
						<div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
					</div>
				</div>
			</div>
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<BlogListSkeleton />
			</main>
		</div>
	);
}
