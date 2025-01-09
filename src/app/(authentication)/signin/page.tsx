
import { LoginForm } from "@/auth/components/LoginForm"

type SearchParams = { callbackUrl: string | string[] | undefined }

export default async function SignInPage(props: {
	searchParams: SearchParams
}) {

	const { callbackUrl } = await props.searchParams;

	return (
		<div className={"flex flex-col gap-6"}>
			<LoginForm searchParams={callbackUrl} />
		</div>
	)
}
