import { auth } from '@/auth'
import CreatedLinksTable from '@/url/components/CreatedLinkTable'
import FeatureList from '@/components/FeatureList'
import Footer from '@/components/Footer'
import ShortUrlForm from '@/url/components/ShortUrlForm'
import { Sparkles } from 'lucide-react'

export default function Home() {

  const session = auth();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 animate-gradient-x" />

        {/* Content */}
        <div className="relative pt-16 pb-32 sm:pt-24 sm:pb-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block">Shorten Your URLs</span>
                <span className="block text-indigo-400">Expand Your Reach</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Create memorable, short links in seconds. Track clicks, analyze data, and boost your online presence.
              </p>
            </div>

            {/* URL Shortener Form */}
            <div className="mt-10 max-w-xl mx-auto">
              <ShortUrlForm />
            </div>
          </div>
        </div>
      </div>

      {/* Created Links Table Section */}
      <div className="py-16 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-white mb-8 flex items-center justify-center">
            <Sparkles className="mr-2 text-yellow-400" />
            Your Shortened Links
          </h2>
          <div className="relative">
            {/* Gradient background for floating effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-800 rounded-lg filter blur-xl opacity-50 transform -skew-y-3"></div>
            {/* Table container */}
            <div className="relative bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 table-container">
              <CreatedLinksTable />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">
            Powerful Features for Your Links
          </h2>
          <FeatureList />
        </div>
        {/* Add a decorative element */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-900 to-transparent opacity-20"></div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

