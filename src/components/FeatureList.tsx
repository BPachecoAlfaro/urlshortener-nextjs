import { BarChart2, Globe, Shield } from 'lucide-react'

const features = [
	{
		name: 'Advanced Analytics',
		description: 'Track clicks, geographic data, and referral sources for all your shortened links.',
		icon: BarChart2,
	},
	{
		name: 'Custom Domains',
		description: 'Use your own domain to create branded short links that reinforce your identity.',
		icon: Globe,
	},
	{
		name: 'Link Protection',
		description: 'Secure your links with password protection and expiration dates.',
		icon: Shield,
	},
]

export default function FeatureList() {
	return (
		<div className="mt-10">
			<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
				{features.map((feature) => (
					<div key={feature.name} className="relative bg-gray-800 p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl">
						<dt>
							<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
								<feature.icon className="h-6 w-6" aria-hidden="true" />
							</div>
							<p className="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
						</dt>
						<dd className="mt-2 ml-16 text-base text-gray-400">{feature.description}</dd>
					</div>
				))}
			</dl>
		</div>
	)
}