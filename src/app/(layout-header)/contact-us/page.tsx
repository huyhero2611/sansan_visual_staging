import { createPageTitle, PAGE_TITLES } from '@/constants/route'
import ContactUs from '@/features/contactUs/ContactUs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: createPageTitle(PAGE_TITLES.CONTACT_US),
}

export default function ContactUsPage() {
  return <ContactUs />
}
