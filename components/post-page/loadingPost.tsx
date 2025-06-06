export function LoadingPost() {
	return (
		<div className="max-w-4xl mx-auto animate-pulse">
			{/* Back Button Skeleton */}
			<div className="mb-8">
				<div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
			</div>

			{/* Header Skeleton */}
			<header className="mb-8">
				{/* Cover Image Skeleton */}
				<div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-8" />

				{/* Title Skeleton */}
				<div className="space-y-3 mb-6">
					<div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded" />
					<div className="h-12 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
				</div>

				{/* Excerpt Skeleton */}
				<div className="space-y-2 mb-6">
					<div className="h-6 w-full bg-gray-200 dark:bg-gray-700 rounded" />
					<div className="h-6 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
				</div>

				{/* Meta Info Skeleton */}
				<div className="flex gap-6 pb-6 border-b border-gray-200 dark:border-gray-700">
					<div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
					<div className="h-5 w-28 bg-gray-200 dark:bg-gray-700 rounded" />
					<div className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
				</div>
			</header>

			{/* Content Skeleton */}
			<div className="space-y-4">
				{Array.from({ length: 8 }).map((_, i) => (
					<div key={i} className="space-y-2">
						<div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
						<div className="h-4 w-11/12 bg-gray-200 dark:bg-gray-700 rounded" />
						<div className="h-4 w-4/5 bg-gray-200 dark:bg-gray-700 rounded" />
					</div>
				))}
			</div>

			{/* Footer Skeleton */}
			<footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
				<div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
					<div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
					<div className="space-y-2">
						<div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
						<div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
					</div>
				</div>
			</footer>
		</div>
	);
}
