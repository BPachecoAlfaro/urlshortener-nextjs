import { RegisterForm } from "@/auth/components/RegisterForm";

export default async function RegisterPage() {

	return (
		<div className={"flex flex-col gap-6"}>
			<RegisterForm />
		</div>
	)
}
