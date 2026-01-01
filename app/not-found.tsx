import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-bg">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-dark-heading mb-4">404</h1>
        <p className="text-xl text-gray-600 dark:text-dark-text mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
