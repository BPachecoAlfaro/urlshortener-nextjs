'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

interface IFormInput {
	email: string,
	password: string,
}

export const RegisterForm = () => {

	const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-2xl">Register</CardTitle>
				<CardDescription>
					Enter your email below to create your account
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col gap-6">
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								type="email"
								{...register('email', { required: true })}
								aria-invalid={errors.email ? 'true' : 'false'}
							/>
							{errors.email?.type === "required" && (
								<p role="alert">Email is required</p>
							)}
						</div>
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">Password</Label>
							</div>
							<Input
								type="password"
								{...register('password', { required: true, minLength: 8, maxLength: 20 })}
								aria-invalid={errors.password ? "true" : "false"}
							/>
							{errors.password?.type === "required" && <p role="alert">Password is required</p>}
							{errors.password?.type === "minLength" && <p role="alert">Password min length is 8</p>}
							{errors.password?.type === "maxLength" && <p role="alert">Password max length is 20</p>}

						</div>
						<Button type="submit" className="w-full">
							Create acount
						</Button>
					</div>
					<div className="mt-4 text-center text-sm">
						Do you have an account?{" "}
						<Link href="/signin" className="underline underline-offset-4">
							Sign in
						</Link>
					</div>
				</form>

			</CardContent>
		</Card>
	)
}


