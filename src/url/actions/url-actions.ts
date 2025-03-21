'use server';

import { auth } from "@/auth";
import { DOMAIN_URL } from "@/config";
import { prisma } from "@/prisma";
import { Url } from "@prisma/client";
import { revalidatePath } from "next/cache";


export const createShortUrl = async(originalUrl: string, shortUrl: string) => {
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
		const url = await prisma.url.findFirst({where: {shortUrl: `${DOMAIN_URL}${shortUrl}`}});
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
			clicks: link.clicks,
			createdAt: link.createdAt,
		}))
		.sort((a,b)=> a.createdAt.getTime() - b.createdAt.getTime())
		.reverse();
		return linksMap;
		
	} catch (error) {
		console.log(error);
	}
	
}

export const deleteUrlById = async(id: string) => {
	const session = await auth();
	if (!session?.user) return;

	try {
		await prisma.url.delete({where: {id: id, userId: session?.user?.id}})
	} catch (error) {
		console.log(error)
	}

}