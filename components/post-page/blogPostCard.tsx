// components/BlogPostCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowUpRight } from 'lucide-react';

interface BlogPost {
	id: string;
	title: string;
	publishDate: string;
	slug: string;
	category: string;
	author: string;
	coverImage?: string;
}

interface BlogPostCardProps {
	post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
	const formatDate = (isoString: string) => {
		return new Date(isoString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	return (
		<article className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40 transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
			<Link href={`/posts/${post.slug}`}>
				{/* Cover Image */}
				{post.coverImage && (
					<div className="aspect-video relative overflow-hidden bg-gray-100 dark:bg-gray-700">
						<Image
							src={post.coverImage}
							alt={post.title}
							fill
							loading="lazy"
							className="object-cover group-hover:scale-105 transition-transform duration-300"
						/>
					</div>
				)}

				<div className="p-6">
					{/* Category Badge */}

					<div className="mb-4">
						<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/50 transition-colors">
							{post.category}
						</span>
					</div>

					{/* Title */}
					<h3 className="mb-4">
						<Link
							href={`/posts/${post.slug}`}
							className="text-xl font-bold text-gray-900 dark:text-gray-100 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400"
						>
							<span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text group-hover:from-blue-600 group-hover:to-blue-500 dark:group-hover:from-blue-400 dark:group-hover:to-blue-300 transition-all duration-300">
								{post.title}
							</span>
						</Link>
					</h3>

					{/* Meta Information */}
					<div className="flex items-center justify-between text-sm">
						{/* Author */}
						<div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
							<div className="p-1 rounded-full bg-gray-100 dark:bg-gray-700">
								<User size={12} className="text-gray-500 dark:text-gray-400" />
							</div>
							<span className="font-medium">{post.author}</span>
						</div>

						{/* Date */}
						<div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
							<Calendar size={12} />
							<time dateTime={post.publishDate} className="text-xs font-medium">
								{formatDate(post.publishDate)}
							</time>
						</div>
					</div>

					{/* Read More Indicator */}
					<div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
						<Link
							href={`/posts/${post.slug}`}
							className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
						>
							<span>Read Article</span>
							<ArrowUpRight
								size={14}
								className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
							/>
						</Link>
					</div>
				</div>
			</Link>
		</article>
	);
}

// Alternative simpler version if you prefer less effects
export function BlogPostCardSimple({ post }: BlogPostCardProps) {
	const formatDate = (isoString: string) => {
		return new Date(isoString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	return (
		<article className="group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md dark:shadow-gray-900/10 dark:hover:shadow-gray-900/25 transition-all duration-200 overflow-hidden border border-gray-200 dark:border-gray-700">
			{/* Cover Image */}
			{post.coverImage && (
				<div className="aspect-video relative overflow-hidden bg-gray-100 dark:bg-gray-700">
					<Image
						src={post.coverImage}
						alt={post.title}
						fill
						className="object-cover"
					/>
				</div>
			)}

			<div className="p-6">
				{/* Category */}
				{post.category && (
					<div className="mb-3">
						<span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
							{post.category}
						</span>
					</div>
				)}

				{/* Title */}
				<h3 className="mb-4">
					<Link
						href={`/posts/${post.slug}`}
						className="text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
					>
						{post.title}
					</Link>
				</h3>

				{/* Meta */}
				<div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
					<div className="flex items-center gap-1">
						<User size={14} />
						<span>{post.author}</span>
					</div>
					<div className="flex items-center gap-1">
						<Calendar size={14} />
						<time dateTime={post.publishDate}>
							{formatDate(post.publishDate)}
						</time>
					</div>
				</div>
			</div>
		</article>
	);
}
