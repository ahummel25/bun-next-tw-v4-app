import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

const Home = () => (
  <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-6 md:p-8">
    {/* Cards container */}
    <div className="flex w-full max-w-4xl flex-col space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0">
      {/* First Card */}
      <Link href="/fav-links" className="w-full sm:w-1/2">
        <Card className="card-wrapper relative h-[300px] transition-transform hover:scale-105 hover:shadow-xl hover:dark:shadow-blue-500/100 sm:h-[350px] md:h-[400px]">
          <CardContent className="card-content relative z-10 flex h-full flex-col items-center justify-center text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 sm:text-xl">Favorite Links</h3>
            <p className="pt-4 text-sm text-gray-500 dark:text-gray-400">Manage your favorite links here.</p>
          </CardContent>
        </Card>
      </Link>

      {/* Second Card */}
      <Link href="/modify-image" className="w-full sm:w-1/2">
        <Card className="card-wrapper relative h-[300px] transition-transform hover:scale-105 hover:shadow-xl hover:dark:shadow-blue-500/100 sm:h-[350px] md:h-[400px]">
          <CardContent className="card-content relative z-10 flex h-full flex-col items-center justify-center text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 sm:text-xl">Modify Image</h3>
            <p className="pt-4 text-sm text-gray-500 dark:text-gray-400">Modify your images here.</p>
          </CardContent>
        </Card>
      </Link>
    </div>
  </main>
)

export default Home

