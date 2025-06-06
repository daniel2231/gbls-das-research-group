'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { BlogPost } from '@/types';

interface SearchAndFilterProps {
	posts: BlogPost[];
	onFilteredPosts: (posts: BlogPost[]) => void;
}

export default function SearchAndFilter({
	posts,
	onFilteredPosts,
}: SearchAndFilterProps) {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('');
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	// Get unique categories from posts
	const categories = Array.from(
		new Set(posts.map((post) => post.category).filter(Boolean))
	);

	// Filter posts based on search term and category
	useEffect(() => {
		let filtered = posts;

		// Filter by search term
		if (searchTerm) {
			filtered = filtered.filter(
				(post) =>
					post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
					post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
					post.category.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}

		// Filter by category
		if (selectedCategory) {
			filtered = filtered.filter((post) => post.category === selectedCategory);
		}

		onFilteredPosts(filtered);
	}, [searchTerm, selectedCategory, posts, onFilteredPosts]);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Element;
			if (!target.closest('[data-filter-dropdown]')) {
				setIsFilterOpen(false);
			}
		};

		if (isFilterOpen) {
			document.addEventListener('click', handleClickOutside);
			return () => document.removeEventListener('click', handleClickOutside);
		}
	}, [isFilterOpen]);

	const clearFilters = () => {
		setSearchTerm('');
		setSelectedCategory('');
	};

	const hasActiveFilters = searchTerm || selectedCategory;

	return (
		<div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
				<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
					{/* Search Bar */}
					<div className="relative flex-1 max-w-md">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<Search className="h-5 w-5 text-gray-400 dark:text-gray-500" />
						</div>
						<input
							type="text"
							placeholder="Search articles..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="block w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
						/>
						{searchTerm && (
							<button
								onClick={() => setSearchTerm('')}
								className="absolute inset-y-0 right-0 pr-3 flex items-center"
							>
								<X className="h-4 w-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
							</button>
						)}
					</div>

					{/* Category Filter */}
					<div className="relative" data-filter-dropdown>
						<button
							onClick={() => setIsFilterOpen(!isFilterOpen)}
							className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
						>
							<Filter className="h-4 w-4" />
							<span className="text-sm font-medium">
								{selectedCategory || 'All Categories'}
							</span>
							{selectedCategory && (
								<span className="ml-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-2 py-0.5 rounded-full">
									1
								</span>
							)}
						</button>

						{/* Category Dropdown */}
						{isFilterOpen && (
							<div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
								<div className="py-1">
									<button
										onClick={() => {
											setSelectedCategory('');
											setIsFilterOpen(false);
										}}
										className={`w-full text-left px-4 py-2 text-sm transition-colors ${
											!selectedCategory
												? 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300'
												: 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
										}`}
									>
										All Categories
									</button>
									{categories.map((category) => (
										<button
											key={category}
											onClick={() => {
												setSelectedCategory(category);
												setIsFilterOpen(false);
											}}
											className={`w-full text-left px-4 py-2 text-sm transition-colors ${
												selectedCategory === category
													? 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300'
													: 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
											}`}
										>
											{category}
										</button>
									))}
								</div>
							</div>
						)}
					</div>

					{/* Clear Filters */}
					{hasActiveFilters && (
						<button
							onClick={clearFilters}
							className="inline-flex items-center gap-1 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
						>
							<X className="h-4 w-4" />
							Clear
						</button>
					)}
				</div>

				{/* Active Filters Display */}
				{hasActiveFilters && (
					<div className="mt-3 flex flex-wrap gap-2">
						{searchTerm && (
							<span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">
								Search: {searchTerm}
								<button onClick={() => setSearchTerm('')}>
									<X className="h-3 w-3" />
								</button>
							</span>
						)}
						{selectedCategory && (
							<span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">
								{selectedCategory}
								<button onClick={() => setSelectedCategory('')}>
									<X className="h-3 w-3" />
								</button>
							</span>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
