'use client'

import { ROUTES } from '@/constants/route'
import { cx } from 'class-variance-authority'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/assets/common/logo.png'

const navItems = [
  { name: 'Home', href: ROUTES.HOME },
  { name: 'Visual Staging', href: ROUTES.VISUAL_STAGING },
  { name: 'Visual Renovation', href: ROUTES.VISUAL_RENOVATION },
  { name: 'Gallery', href: ROUTES.GALLERY },
  { name: 'About Us', href: ROUTES.ABOUT_US },
  { name: 'Contact Us', href: ROUTES.CONTACT_US },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="w-full bg-cover bg-center bg-no-repeat relative bg-[url('../assets/common/banner_header_sansan.png')]">
      <div className="absolute inset-0 bg-black/80" />
      <div className="p-8 z-10 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-bold text-xl text-white">
            <Link href="/">
              <Image src={Logo} alt="Sansan Logo" width={200} height={100} priority />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="flex gap-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={cx(
                    'text-md font-medium transition-colors hover:text-white',
                    pathname === item.href ? 'text-white' : 'text-gray-200',
                    pathname === item.href ? 'underline underline-offset-4 decoration-2' : ''
                  )}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="text-white text-md font-bold">
            <div className="flex items-center gap-2 mb-1">
              <span>📞</span>
              <span>+1234567890</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <span>info@sansan.com</span>
            </div>
          </div>
        </div>

        {/* Current Page Label */}
        <div className="mt-8">
          <h1 className="text-[40px] font-bold text-white underline underline-offset-8 decoration-2">
            {navItems.find((item) => item.href === pathname)?.name || 'Home'}
          </h1>
        </div>
      </div>
    </header>
  )
}
