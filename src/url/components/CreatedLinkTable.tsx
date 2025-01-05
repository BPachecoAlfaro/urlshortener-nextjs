
import { auth } from "@/auth"
import { TableLinks } from "./Table"
import { getTableLinksById } from "../actions/url-actions";

// This would typically come from an API or database
const ExampleLinks = [
	{ id: '1', originalUrl: 'https://www.example.com/very/long/url/1', shortUrl: 'https://short.url/abc123', clicks: 42 },
	{ id: '2', originalUrl: 'https://www.anotherexample.com/another/long/url/2', shortUrl: 'https://short.url/def456', clicks: 17 },
	{ id: '3', originalUrl: 'https://www.thirddomain.com/yet/another/long/url/3', shortUrl: 'https://short.url/ghi789', clicks: 31 },
]

export default async function CreatedLinksTable() {

	const session = await auth();
	let links;
	if (session?.user) {
		links = await getTableLinksById(session.user.id!);
	}

	return (
		<>
			{
				session?.user ? <TableLinks linksTable={links!} /> : <TableLinks linksTable={ExampleLinks} />
			}
		</>
	)
}
