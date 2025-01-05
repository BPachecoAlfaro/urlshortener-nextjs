import { prisma } from "@/prisma";
import { getOriginalUrl, updateClicksCount } from "@/url/actions/url-actions";
import { Url } from "@prisma/client";
import { redirect } from "next/navigation";

export async function GET(request: Request,{ params }: { params: Promise<{ shorturl: string }> }) {
  const shorturl = (await params).shorturl;
  const url = await getOriginalUrl(shorturl);
  if (!url) {
    return new Response(`${ shorturl } not found`, {
      status: 404,
    })
  }
  updateClicksCount(url);
	redirect(url?.originalUrl);
	
}