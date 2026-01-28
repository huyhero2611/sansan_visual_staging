import { createPageTitle, PAGE_TITLES } from '@/constants/route'
import { Metadata } from 'next'
import VisualStaging from '@/features/visualStaging/VisualStaging'

export const metadata: Metadata = {
  title: createPageTitle(PAGE_TITLES.VISUAL_STAGING),
}

export default function VisualStagingPage() {
  return <VisualStaging />
}
