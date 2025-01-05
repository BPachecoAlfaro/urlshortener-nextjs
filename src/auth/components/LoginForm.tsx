import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { providerMap, signIn } from "@/auth"
import { redirect } from "next/navigation"
import { AuthError } from "next-auth"

export async function LoginForm({ ...props }) {
	return (
		<div className={"flex flex-col gap-6"}>
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">Login</CardTitle>
				</CardHeader>
				<CardContent>
					{Object.values(providerMap).map((provider) => (
						<form
							key={provider.name}
							action={async () => {
								"use server"
								try {
									await signIn(provider.id, {
										redirectTo: props.searchParams?.callbackUrl ?? "",
									})
								} catch (error) {
									if (error instanceof AuthError) {
										// TODO: fix
										return;
										// return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
									}
									throw error
								}
							}}
						>
							<div className="flex flex-col gap-6">
								<Button variant="outline" className="w-full">
									Login with {provider.name}
								</Button>
							</div>
						</form>
					))}
				</CardContent>
			</Card>
		</div>
	)
}
