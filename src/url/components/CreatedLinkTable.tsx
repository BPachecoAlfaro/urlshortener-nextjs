'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Copy, ExternalLink } from 'lucide-react'

// This would typically come from an API or database
const initialLinks = [
	{ id: 1, originalUrl: 'https://www.example.com/very/long/url/1', shortUrl: 'https://short.url/abc123', clicks: 42 },
	{ id: 2, originalUrl: 'https://www.anotherexample.com/another/long/url/2', shortUrl: 'https://short.url/def456', clicks: 17 },
	{ id: 3, originalUrl: 'https://www.thirddomain.com/yet/another/long/url/3', shortUrl: 'https://short.url/ghi789', clicks: 31 },
]

export default function CreatedLinksTable() {
	const [links, setLinks] = useState(initialLinks)

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text)
		// You might want to add a toast notification here
	}

	return (
		<div className="bg-gray-800 rounded-lg shadow overflow-hidden">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[300px]">Original URL</TableHead>
						<TableHead>Short URL</TableHead>
						<TableHead className="text-right">Clicks</TableHead>
						<TableHead className="text-right">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{links.map((link) => (
						<TableRow key={link.id}>
							<TableCell className="font-medium truncate max-w-[300px]">{link.originalUrl}</TableCell>
							<TableCell>{link.shortUrl}</TableCell>
							<TableCell className="text-right">{link.clicks}</TableCell>
							<TableCell className="text-right">
								<Button
									variant="ghost"
									size="icon"
									onClick={() => copyToClipboard(link.shortUrl)}
									className="text-gray-400 hover:text-white"
								>
									<Copy className="h-4 w-4" />
								</Button>
								<Button
									variant="ghost"
									size="icon"
									onClick={() => window.open(link.shortUrl, '_blank')}
									className="text-gray-400 hover:text-white"
								>
									<ExternalLink className="h-4 w-4" />
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}
