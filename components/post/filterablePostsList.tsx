'use client';

import { useState, useEffect } from 'react';
import BlogPostCard from '@/components/post-page/blogPostCard';
import SearchAndFilter from './searchAndFilter';
import { BlogPost } from '@/types';

interface FilterablePostsListProps {
	initialPosts: BlogPost[];
}

export default function FilterablePostsList({
	initialPosts,
}: FilterablePostsListProps) {
	const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(initialPosts);

	// Update filtered posts when initial posts change
	useEffect(() => {
		setFilteredPosts(initialPosts);
	}, [initialPosts]);

	return (
		<>
			<SearchAndFilter
				posts={initialPosts}
				onFilteredPosts={setFilteredPosts}
			/>

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="mb-8">
					<h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
						Latest Articles
					</h2>
					<p className="text-gray-600 dark:text-gray-400">
						Deep dives into airsoft technology and product analysis
					</p>
					{filteredPosts.length !== initialPosts.length && (
						<p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
							Showing {filteredPosts.length} of {initialPosts.length} articles
						</p>
					)}
				</div>

				{filteredPosts.length === 0 ? (
					<div className="text-center py-12">
						<h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
							No articles match your filters
						</h3>
						<p className="text-gray-600 dark:text-gray-400">
							Try adjusting your search terms or category selection.
						</p>
					</div>
				) : (
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{filteredPosts.map((post) => (
							<BlogPostCard key={post.id} post={post} />
						))}
					</div>
				)}
			</main>
		</>
	);
}
