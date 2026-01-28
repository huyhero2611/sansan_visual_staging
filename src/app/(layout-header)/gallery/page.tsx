import { createPageTitle, PAGE_TITLES } from '@/constants/route'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: createPageTitle(PAGE_TITLES.GALLERY),
}

export default function GalleryPage() {
  return <div>Gallery Page</div>
}
