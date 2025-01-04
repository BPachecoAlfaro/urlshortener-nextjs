import { redirect } from "next/navigation";

export async function GET(request: Request,{ params }: { params: Promise<{ shorturl: string }> }) {
  const shorturl = (await params).shorturl;
	// redirect('https://nextjs.org/')
	return new Response(`Hello, Next.js! ${ shorturl }`, {
    status: 200,
  })
	
}