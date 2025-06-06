/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';

interface NotionBlock {
	id: string;
	type: string;
	[key: string]: any;
}

interface BlogContentProps {
	blocks: NotionBlock[];
}

export default function BlogContent({ blocks }: BlogContentProps) {
	const renderBlock = (block: NotionBlock) => {
		const { type, id } = block;

		switch (type) {
			case 'paragraph':
				return (
					<p key={id} className="mb-4 text-gray-900 dark:text-gray-100">
						{renderRichText(block.paragraph.rich_text)}
					</p>
				);

			case 'video':
				const videoUrl = block.video.file?.url || block.video.external?.url;
				const videoCaption = block.video.caption?.[0]?.plain_text || '';

				return (
					<div key={id} className="mb-4">
						<div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
							<video
								className="w-full h-full object-cover"
								controls
								src={videoUrl}
							/>
						</div>
						{videoCaption && (
							<p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
								{videoCaption}
							</p>
						)}
					</div>
				);

			case 'heading_1':
				return (
					<h1
						key={id}
						className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100"
					>
						{renderRichText(block.heading_1.rich_text)}
					</h1>
				);

			case 'heading_2':
				return (
					<h2
						key={id}
						className="text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100"
					>
						{renderRichText(block.heading_2.rich_text)}
					</h2>
				);

			case 'heading_3':
				return (
					<h3
						key={id}
						className="text-xl font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-100"
					>
						{renderRichText(block.heading_3.rich_text)}
					</h3>
				);

			case 'bulleted_list_item':
				return (
					<li key={id} className="mb-1 text-gray-900 dark:text-gray-100">
						{renderRichText(block.bulleted_list_item.rich_text)}
					</li>
				);

			case 'numbered_list_item':
				return (
					<li key={id} className="mb-1 text-gray-900 dark:text-gray-100">
						{renderRichText(block.numbered_list_item.rich_text)}
					</li>
				);

			case 'quote':
				return (
					<blockquote
						key={id}
						className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 italic my-4 text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-950/30 py-2 rounded-r"
					>
						{renderRichText(block.quote.rich_text)}
					</blockquote>
				);

			case 'code':
				return (
					<pre
						key={id}
						className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto my-4 border dark:border-gray-700"
					>
						<code className="text-sm text-gray-800 dark:text-gray-200">
							{block.code.rich_text?.[0]?.plain_text || ''}
						</code>
					</pre>
				);

			case 'image':
				const imageUrl = block.image.file?.url || block.image.external?.url;
				const caption = block.image.caption?.[0]?.plain_text || '';
				return (
					<figure key={id} className="my-6">
						<div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
							<Image
								src={imageUrl}
								alt={caption || 'Blog image'}
								fill
								className="object-cover"
							/>
						</div>
						{caption && (
							<figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
								{caption}
							</figcaption>
						)}
					</figure>
				);

			case 'divider':
				return (
					<hr key={id} className="my-8 border-gray-300 dark:border-gray-600" />
				);

			default:
				return (
					<div
						key={id}
						className="mb-4 p-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded text-sm text-yellow-800 dark:text-yellow-200"
					>
						Unsupported block type: {type}
					</div>
				);
		}
	};

	const renderRichText = (richText: any[]) => {
		if (!richText) return '';

		return richText.map((text, index) => {
			let element = text.plain_text;

			if (text.annotations.bold) {
				element = (
					<strong
						key={index}
						className="font-bold text-gray-900 dark:text-gray-100"
					>
						{element}
					</strong>
				);
			}
			if (text.annotations.italic) {
				element = (
					<em key={index} className="italic text-gray-900 dark:text-gray-100">
						{element}
					</em>
				);
			}
			if (text.annotations.code) {
				element = (
					<code
						key={index}
						className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-1 py-0.5 rounded text-sm border dark:border-gray-700"
					>
						{element}
					</code>
				);
			}
			if (text.href) {
				element = (
					<a
						key={index}
						href={text.href}
						className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors"
						target="_blank"
						rel="noopener noreferrer"
					>
						{element}
					</a>
				);
			}

			return element;
		});
	};

	// Group consecutive list items
	const groupedBlocks: (NotionBlock | NotionBlock[])[] = [];
	let currentList: NotionBlock[] = [];
	let currentListType: 'bulleted' | 'numbered' | null = null;

	blocks.forEach((block) => {
		if (block.type === 'bulleted_list_item') {
			if (currentListType !== 'bulleted') {
				if (currentList.length > 0) {
					groupedBlocks.push([...currentList]);
				}
				currentList = [block];
				currentListType = 'bulleted';
			} else {
				currentList.push(block);
			}
		} else if (block.type === 'numbered_list_item') {
			if (currentListType !== 'numbered') {
				if (currentList.length > 0) {
					groupedBlocks.push([...currentList]);
				}
				currentList = [block];
				currentListType = 'numbered';
			} else {
				currentList.push(block);
			}
		} else {
			if (currentList.length > 0) {
				groupedBlocks.push([...currentList]);
				currentList = [];
				currentListType = null;
			}
			groupedBlocks.push(block);
		}
	});

	// Don't forget the last list if it exists
	if (currentList.length > 0) {
		groupedBlocks.push([...currentList]);
	}

	return (
		<div className="space-y-1">
			{groupedBlocks.map((item, index) => {
				if (Array.isArray(item)) {
					const listType = item[0].type === 'bulleted_list_item' ? 'ul' : 'ol';
					return (
						<div key={`list-${index}`} className="my-4">
							{listType === 'ul' ? (
								<ul className="list-disc list-inside space-y-1 text-gray-900 dark:text-gray-100 marker:text-gray-600 dark:marker:text-gray-400">
									{item.map(renderBlock)}
								</ul>
							) : (
								<ol className="list-decimal list-inside space-y-1 text-gray-900 dark:text-gray-100 marker:text-gray-600 dark:marker:text-gray-400">
									{item.map(renderBlock)}
								</ol>
							)}
						</div>
					);
				}
				return renderBlock(item);
			})}
		</div>
	);
}
