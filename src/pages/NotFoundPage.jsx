import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="py-32 text-center">
      <h1 className="text-6xl font-bold text-gray-300">404</h1>
      <p className="text-xl text-gray-600 mt-4">Page not found</p>
      <Link to="/" className="underline text-black font-medium mt-8 inline-block">
        Go back home
      </Link>
    </div>
  )
}
