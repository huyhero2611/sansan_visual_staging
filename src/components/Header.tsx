'use client'

import { ROUTES } from '@/constants/route'
import { cx } from 'class-variance-authority'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [{ name: 'Home', href: ROUTES.HOME }]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="w-full bg-white px-6 py-3 flex items-center justify-between border-b shadow-md h-16">
      {/* Logo */}
      <div className="font-bold text-xl text-blue-600">
        <Link href="/">
          <Image src="/logo-cropped.svg" alt="AWS Flow Logo" width={100} height={400} priority />
        </Link>
      </div>

      {/* Nav menu */}
      <nav className="flex gap-6">
        {navItems.map((item) => (
          <div key={item.href} className="relative">
            <Link
              href={item.href}
              className={cx(
                'text-md font-medium transition-colors hover:text-blue-600',
                pathname === item.href ? 'text-blue-600' : 'text-gray-600',
                pathname === item.href ? 'underline underline-offset-4' : ''
              )}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </nav>
    </header>
  )
}
