import { createPageTitle, PAGE_TITLES } from '@/constants/route'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: createPageTitle(PAGE_TITLES.ABOUT_US),
}

export default function AboutUsPage() {
  return <div>About Us Page</div>
}
