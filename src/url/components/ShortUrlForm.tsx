'use client'

import { SetStateAction, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LinkIcon } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { CreateShortUrl } from '../actions/url-actions'

export default function ShortUrlForm() {

	const session = useSession();

	const [url, setUrl] = useState('')
	const [shortUrl, setShortUrl] = useState('')

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (session.status !== "authenticated") redirect('/api/auth/signin');
		// Aquí iría la lógica para generar la URL corta
		const newShortUrl = `http://localhost:3000/${Math.random().toString(36).substr(2, 6)}`;
		setShortUrl(newShortUrl);
		CreateShortUrl(url, newShortUrl);
		setUrl('')
	}

	return (
		<div className="bg-gray-800 p-6 rounded-lg shadow-lg">
			<form onSubmit={handleSubmit} className="space-y-4">
				<div className="flex items-center space-x-2">
					<Input
						type="url"
						value={url}
						onChange={(e: { target: { value: SetStateAction<string> } }) => setUrl(e.target.value)}
						placeholder="Paste your long URL here"
						className="flex-grow bg-gray-700 text-white border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
						required
					/>
					<Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
						Shorten
					</Button>
				</div>
				{shortUrl && (
					<div className="mt-4 p-4 bg-gray-700 rounded-md flex items-center justify-between">
						<div className="flex items-center space-x-2 gap-2">
							<LinkIcon className="h-5 w-5 text-indigo-400" />
							<a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 break-all">
								{shortUrl}
							</a>
						</div>
						<Button
							type='button'
							onClick={() => navigator.clipboard.writeText(shortUrl)}
							className="bg-gray-600 hover:bg-gray-500 text-white text-sm py-1 px-2 rounded"
						>
							Copy
						</Button>
					</div>
				)}
			</form>
		</div>
	)
}

