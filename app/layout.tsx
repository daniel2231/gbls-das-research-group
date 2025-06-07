import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import ThemeProvider from './theme-provider';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
	title: 'GNDBROS DAS Research Group',
	description: 'GNDBROS DAS Research Group',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="bg-white dark:bg-[#191919] text-[#37352f] dark:text-[#ffffffcf]">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<main>{children}</main>
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
}
