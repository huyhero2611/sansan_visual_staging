/* ==================== AWS ROUTES ==================== */

export const ROUTES = {
  HOME: '/',
  VISUAL_STAGING: '/visual-staging',
  VISUAL_RENOVATION: '/visual-renovation',
  GALLERY: '/gallery',
  ABOUT_US: '/about-us',
  CONTACT_US: '/contact-us',
}

export const PAGE_TITLES = {
  HOME: 'Home',
  VISUAL_STAGING: 'Visual Staging',
  VISUAL_RENOVATION: 'Visual Renovation',
  GALLERY: 'Gallery',
  ABOUT_US: 'About Us',
  CONTACT_US: 'Contact Us',
} as const

export const createPageTitle = (page: string) => `${page} | Sansan`
