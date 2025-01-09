'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
	email: string,
	password: string,
}

export const EmailPasswordLogin = () => {

	const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

	return (
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
						<a
							href="#"
							className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
						>
							Forgot your password?
						</a>
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
					Login
				</Button>
			</div>
			<div className="mt-4 text-center text-sm">
				Don&apos;t have an account?{" "}
				<a href="#" className="underline underline-offset-4">
					Sign up
				</a>
			</div>
		</form>
	)
}
