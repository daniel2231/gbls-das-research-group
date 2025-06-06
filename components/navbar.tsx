'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SearchBar } from './search-bar';
import ThemeToggle from './theme-toggle';

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	// Handle scroll for navbar background
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Close menu on route change
	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	// Prevent body scroll when menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		// Cleanup on unmount
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isMenuOpen]);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/posts', label: 'Posts' },
		{ href: '/about', label: 'About' },
	];

	const isActiveLink = (href: string) => {
		if (href === '/') {
			return pathname === '/';
		}
		return pathname.startsWith(href);
	};

	return (
		<>
			{/* Sticky Navbar */}
			<header
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled
						? 'bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-md'
						: 'bg-white dark:bg-gray-800 shadow-sm'
				}`}
			>
				<nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<div className="flex items-center">
							<Link
								href="/"
								className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
							>
								GDRG
							</Link>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden items-center space-x-8 md:flex">
							<SearchBar />
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className={`relative text-sm font-medium transition-colors duration-200 ${
										isActiveLink(link.href)
											? 'text-blue-600 dark:text-blue-400'
											: 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
									}`}
								>
									{link.label}
									{/* Active indicator */}
									{isActiveLink(link.href) && (
										<span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
									)}
								</Link>
							))}
							<ThemeToggle />
						</div>

						{/* Mobile Menu Button */}
						<div className="flex items-center space-x-4 md:hidden">
							<ThemeToggle />
							<button
								onClick={toggleMenu}
								className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-lg transition-colors"
								aria-label="Toggle menu"
								aria-expanded={isMenuOpen}
							>
								{/* Hamburger Icon */}
								<div className="w-6 h-6 relative">
									<span
										className={`absolute left-0 block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
											isMenuOpen ? 'rotate-45 top-3' : 'top-1'
										}`}
									/>
									<span
										className={`absolute left-0 top-3 block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
											isMenuOpen ? 'opacity-0' : 'opacity-100'
										}`}
									/>
									<span
										className={`absolute left-0 block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
											isMenuOpen ? '-rotate-45 top-3' : 'top-5'
										}`}
									/>
								</div>
							</button>
						</div>
					</div>
				</nav>
			</header>

			{/* Mobile Menu Overlay */}
			<div
				className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
					isMenuOpen
						? 'opacity-100 pointer-events-auto'
						: 'opacity-0 pointer-events-none'
				}`}
			>
				{/* Backdrop */}
				<div
					className="absolute inset-0 bg-black/50 backdrop-blur-sm"
					onClick={toggleMenu}
				/>

				{/* Menu Panel */}
				<div
					className={`absolute top-20 left-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 transform transition-all duration-300 ease-out ${
						isMenuOpen
							? 'translate-y-0 opacity-100 scale-100'
							: '-translate-y-4 opacity-0 scale-95'
					}`}
				>
					<div className="p-6 space-y-6">
						{/* Mobile Search */}
						<div className="border-b border-gray-200 dark:border-gray-700 pb-4">
							<SearchBar />
						</div>

						{/* Navigation Links */}
						<nav className="space-y-4">
							{navLinks.map((link, index) => (
								<Link
									key={link.href}
									href={link.href}
									className={`block text-lg font-medium transition-colors duration-200 ${
										isActiveLink(link.href)
											? 'text-blue-600 dark:text-blue-400'
											: 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
									}`}
									style={{
										animationDelay: `${index * 50}ms`,
									}}
								>
									<div
										className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
											isActiveLink(link.href)
												? 'bg-blue-50 dark:bg-blue-950/30'
												: 'hover:bg-gray-50 dark:hover:bg-gray-700'
										}`}
									>
										<span>{link.label}</span>
										{isActiveLink(link.href) && (
											<div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
										)}
									</div>
								</Link>
							))}
						</nav>

						{/* Additional Info */}
						<div className="pt-4 border-t border-gray-200 dark:border-gray-700">
							<p className="text-sm text-gray-500 dark:text-gray-400 text-center">
								GBLS Research Group
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Spacer to prevent content from hiding behind fixed navbar */}
			<div className="h-18" />
		</>
	);
}

// Enhanced Search Bar Component (if you need to update it)
export function EnhancedSearchBar() {
	const [isExpanded, setIsExpanded] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<div className="relative">
			<div
				className={`flex items-center transition-all duration-300 ${
					isExpanded ? 'w-64' : 'w-8'
				}`}
			>
				<button
					onClick={() => setIsExpanded(!isExpanded)}
					className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
				>
					<svg
						className="w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>

				{isExpanded && (
					<input
						type="text"
						placeholder="Search..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="ml-2 flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
						autoFocus
					/>
				)}
			</div>
		</div>
	);
}
