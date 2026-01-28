import { createPageTitle, PAGE_TITLES } from '@/constants/route'
import VisualRenovation from '@/features/visualRenovation/VisualRenovation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: createPageTitle(PAGE_TITLES.VISUAL_RENOVATION),
}

export default function VisualRenovationPage() {
  return <VisualRenovation />
}
