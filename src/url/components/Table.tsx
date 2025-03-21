'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Copy, ExternalLink, Trash } from 'lucide-react'
import { useState } from "react";
import { deleteUrlById } from "../actions/url-actions";

export interface LinksTable {
	id: string;
	originalUrl: string;
	shortUrl: string;
	clicks: number;
}

const copyToClipboard = (url: string) => {
	navigator.clipboard.writeText(url)
	// You might want to add a notification here
}

export const TableLinks = ({ linksTable }: { linksTable: LinksTable[] }) => {

	const [table, setTable] = useState(linksTable);

	const removeLink = (id: string) => {
		setTable(linksTable => linksTable.filter(link => link.id !== id));
		deleteUrlById(id);
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
					{table.map((link) => (
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
								<Button
									variant="ghost"
									size="icon"
									onClick={() => removeLink(link.id)}
									className="text-gray-400 hover:text-white"
								>
									<Trash className="h-4 w-4" />
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}
