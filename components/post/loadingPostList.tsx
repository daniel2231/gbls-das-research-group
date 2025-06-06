// components/blog/BlogListSkeleton.tsx
export default function BlogListSkeleton() {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Section Title Skeleton */}
				<div className="mb-8">
					<div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2" />
					<div className="h-5 w-80 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
				</div>

				{/* Blog Posts Grid Skeleton */}
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{Array.from({ length: 9 }).map((_, i) => (
						<BlogPostCardSkeleton key={i} />
					))}
				</div>
			</main>
		</div>
	);
}

// Individual Blog Post Card Skeleton
function BlogPostCardSkeleton() {
	return (
		<article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700">
			{/* Cover Image Skeleton */}
			<div className="aspect-video bg-gray-200 dark:bg-gray-700 animate-pulse" />

			<div className="p-6">
				{/* Category Badge Skeleton */}
				<div className="mb-4">
					<div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
				</div>

				{/* Title Skeleton */}
				<div className="mb-4 space-y-2">
					<div className="h-6 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
					<div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
				</div>

				{/* Meta Information Skeleton */}
				<div className="flex items-center justify-between mb-4">
					{/* Author Skeleton */}
					<div className="flex items-center gap-2">
						<div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
						<div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
					</div>
					{/* Date Skeleton */}
					<div className="flex items-center gap-2">
						<div className="h-3 w-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
						<div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
					</div>
				</div>

				{/* Read More Button Skeleton */}
				<div className="pt-4 border-t border-gray-100 dark:border-gray-700">
					<div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
				</div>
			</div>
		</article>
	);
}
