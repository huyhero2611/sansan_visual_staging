import { ROUTES } from '@/constants/route'
import { FacebookIcon, InstagramIcon } from 'lucide-react'
import Link from 'next/link'

const listLink = [
  {
    name: 'Home',
    href: ROUTES.HOME,
  },
  {
    name: 'About Us',
    href: ROUTES.ABOUT_US,
  },
  {
    name: 'Contact Us',
    href: ROUTES.CONTACT_US,
  },
  {
    name: 'Gallery',
    href: ROUTES.GALLERY,
  },
  {
    name: 'Visual Staging',
    href: ROUTES.VISUAL_STAGING,
  },
  {
    name: 'Visual Renovation',
    href: ROUTES.VISUAL_RENOVATION,
  },
  {
    name: 'Privacy Policy',
    href: ROUTES.PRIVACY_POLICY,
  },
]

export default function Footer() {
  return (
    <div className="">
      <div className="bg-[#0e2c49] text-white">
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-content-center">
            <div className="flex flex-col gap-4">
              <p className="text-2xl">SanSan Studio</p>
              <p className="text-gray-400">
                Welcome to SanSan Studio - The best team specializes in offering virtual staging and
                renovation services.
              </p>
              <div className="flex gap-2">
                <FacebookIcon className="size-8 cursor-pointer hover:text-blue-600" />
                <InstagramIcon className="size-8 cursor-pointer hover:text-red-400" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              {listLink.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="hover:text-gray-400 font-bold text-gray-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-gray-200 text-xl">Our Office</p>
              <div className="text-gray-400">
                <p>Hanoi, Vietnam</p>
                <p>+84 xxx xxx xxx</p>
                <p>xxx@xxx.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-gray-200 text-xl">Business Hours</p>
              <p className="text-gray-400 flex justify-between">
                <span>Mon - Sun</span>
                <span>24/7</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#020000]">
        <div className="container mx-auto py-2">
          <p className="text-white">SanSan Studio © 2025. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
