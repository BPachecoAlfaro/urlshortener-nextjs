'use server';

import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { Url } from "@prisma/client";
import { revalidatePath } from "next/cache";


export const CreateShortUrl = async(originalUrl: string, shortUrl: string) => {
	const session = await auth();
	
	try {
		await prisma.url.create({data: {userId: session?.user?.id!, originalUrl, shortUrl}})
		revalidatePath('/');
	} catch (error) {
		console.log(error);
	}
};

export const getOriginalUrl = async(shortUrl: string) => {

	try {
		const url = await prisma.url.findFirst({where: {shortUrl: `http://localhost:3000/${shortUrl}`}});
		return url;
	} catch (error) {
		console.log(error);
	}
};

export const updateClicksCount = async(url: Url) => {
	
	try {
		await prisma.url.update({where: {id: url.id}, data: {clicks: url.clicks+1}});
	} catch (error) {
		console.log(error);
	}
};

export const getTableLinksById = async(userId: string) => {

	try {
		const links = await prisma.url.findMany({where: {userId: userId}});
		const linksMap = links.map(link => ({
			id: link.id,
			originalUrl: link.originalUrl,
			shortUrl: link.shortUrl,
			clicks: link.clicks
		})).reverse();
		return linksMap;
		
	} catch (error) {
		console.log(error);
	}
	
}
