export default function Footer() {
	return (
		<footer className="bg-gray-900 border-t border-gray-800">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center space-x-6 md:order-2">
					<a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
						About
					</a>
					<a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
						Privacy
					</a>
					<a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
						Terms
					</a>
				</div>
				<div className="mt-8 md:mt-0 md:order-1">
					<p className="text-center text-base text-gray-400">
						&copy; 2023 ShortURL, Inc. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}