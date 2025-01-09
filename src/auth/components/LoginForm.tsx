import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { providerMap, signIn } from "@/auth"
import { redirect } from "next/navigation"
import { AuthError } from "next-auth"
import { FaGithub, FaGoogle } from "react-icons/fa"
import { EmailPasswordLogin } from "./EmailPasswordLogin"



export async function LoginForm({ ...props }) {

	return (
		<div className={"flex flex-col gap-6"}>
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">Login</CardTitle>
					<CardDescription>
						Enter your email below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-4">
					<EmailPasswordLogin />
					<div className="flex flex-col gap-4">
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

								<Button variant="outline" className="w-full">
									<div className="flex gap-3">
										<div>
											Login with {provider.name}
										</div>
										<div className="">
											{provider.name == 'Google' && <FaGoogle />}
											{provider.name == 'GitHub' && <FaGithub />}
										</div>
									</div>
								</Button>
							</form>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	)
}