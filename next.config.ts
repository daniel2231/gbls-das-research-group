import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			//aws s3 for notion images "https://prod-files-secure.s3.us-west-2.amazonaws.com/"
			{
				protocol: 'https',
				hostname: 's3.us-west-2.amazonaws.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
