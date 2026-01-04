import { createPageTitle, PAGE_TITLES } from '@/constants/route'
import Home from '@/features/home/Home'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: createPageTitle(PAGE_TITLES.HOME),
}

export default async function HomePage() {
  return <Home />
}
