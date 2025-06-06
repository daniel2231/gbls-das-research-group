import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { NotionAPI } from '@/utils/notion';
import BlogContent from '@/components/post-page/blogContent';
import Image from 'next/image';
import { BlogPost } from '@/types';
import { LoadingPost } from '@/components/post-page/loadingPost';

interface NotionBlock {
	id: string;
	type: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

async function BlogPostData({ slug }: { slug: string }) {
	// Handle both string and number slugs
	const slug_identifier = Number(slug);
	const post: BlogPost | null = await NotionAPI.getPostBySlug(slug_identifier);

	if (!post) {
		notFound();
	}

	const content = (await NotionAPI.getPageContent(post.id)) as NotionBlock[];

	const formatDate = (isoString: string): string => {
		return new Date(isoString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	return (
		<article className="max-w-4xl mx-auto">
			{/* Back Button */}
			<div className="mb-8">
				<Link
					href="/posts"
					className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
				>
					<ArrowLeft size={16} />
					Back to Blog List
				</Link>
			</div>

			{/* Post Header */}
			<header className="mb-8">
				{post.coverImage && (
					<div className="aspect-video relative rounded-lg overflow-hidden mb-8 bg-gray-100 dark:bg-gray-800">
						<Image
							src={post.coverImage}
							alt={post.title}
							fill
							className="object-cover"
							priority
						/>
					</div>
				)}

				<h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
					{post.title}
				</h1>

				{/* Meta Information */}
				<div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400 text-sm border-b border-gray-200 dark:border-gray-700 pb-6">
					<div className="flex items-center gap-2">
						<User size={16} />
						<span>{post.author}</span>
					</div>
					<div className="flex items-center gap-2">
						<Calendar size={16} />
						<time dateTime={post.publishDate}>
							{formatDate(post.publishDate)}
						</time>
					</div>
				</div>
			</header>

			{/* Post Content */}
			<div className="prose prose-lg prose-blue dark:prose-invert max-w-none">
				<BlogContent blocks={content} />
			</div>

			{/* Post Footer */}
			<footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
				<div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50 rounded-lg p-6">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
						GBLS DAS Research Group
					</h3>
					<p className="text-gray-600 dark:text-gray-400">
						Providing in-depth technical analysis and research insights on GBLS
						airsoft products, including the DAS GDR-15 and other precision
						airsoft equipment.
					</p>
				</div>
			</footer>
		</article>
	);
}

// Updated page component to handle async params
export default async function BlogPostPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	// Await the params to get the actual values
	const { slug } = await params;

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
			{/* Main Content */}
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<Suspense fallback={<LoadingPost />}>
					<BlogPostData slug={slug} />
				</Suspense>
			</main>
		</div>
	);
}

// Generate static params for better performance
export async function generateStaticParams(): Promise<{ slug: string }[]> {
	try {
		const posts: BlogPost[] = await NotionAPI.getPosts();
		return posts.map((post) => ({
			slug: post.slug.toString(),
		}));
	} catch (error) {
		console.error('Error generating static params:', error);
		return [];
	}
}

// Type definitions for Notion API (add to your types file)
export interface NotionAPIResponse {
	getPosts(): Promise<BlogPost[]>;
	getPostBySlug(slug: string | number): Promise<BlogPost | null>;
	getPageContent(pageId: string): Promise<NotionBlock[]>;
}
