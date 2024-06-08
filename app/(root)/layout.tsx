import LeftSideBar from '@/components/LeftSideBar';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<main>
				<p className='text-white-1'>
					<LeftSideBar />
				</p>
				{children}
				<p className='text-white-1'>RIGHT SIDEBAR</p>
			</main>
		</div>
	);
}
