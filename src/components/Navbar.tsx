import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-extrabold tracking-wider logo-text">
              M.A.D
            </Link>
          </div>

          {/* Navigation Menu */}
          <NavigationMenu.Root className="relative">
            <NavigationMenu.List className="flex space-x-8">
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="text-gray-800 hover:text-black transition-colors"
                  href="/"
                >
                  Home
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="text-gray-800 hover:text-black transition-colors"
                  href="/collections"
                >
                  Collections
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="text-gray-800 hover:text-black transition-colors"
                  href="/about"
                >
                  About
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Cart Icon */}
          <div className="flex items-center">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
