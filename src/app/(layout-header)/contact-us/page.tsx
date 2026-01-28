import { createPageTitle, PAGE_TITLES } from '@/constants/route'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: createPageTitle(PAGE_TITLES.CONTACT_US),
}

export default function ContactUsPage() {
  return <div>Contact Us Page</div>
}
