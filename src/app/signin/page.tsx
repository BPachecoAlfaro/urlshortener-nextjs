
import { LoginForm } from "@/components/LoginForm"

type SearchParams = { callbackUrl: string | string[] | undefined }

export default async function SignInPage(props: {
	searchParams: SearchParams
}) {

	const { callbackUrl } = await props.searchParams;

	return (
		<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-sm">
				<LoginForm searchParams={callbackUrl} />
			</div>
		</div>
	)
}
