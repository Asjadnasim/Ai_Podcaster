import type { Metadata } from 'next';
import { Recursive } from 'next/font/google';
import './globals.css';
import ConvexClerkProvider from './providers/ConvexClerkProvider';

const recursive = Recursive({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Podcastr',
	description: 'Generate your podcasts using AI',
	icons: {
		icon: '/icons/logo.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={recursive.className}>
				<ConvexClerkProvider>{children}</ConvexClerkProvider>
			</body>
		</html>
	);
}
