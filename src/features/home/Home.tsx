import { Button } from '@/components/ui/button'
import {
  ArrowRightIcon,
  ClockIcon,
  EarthIcon,
  EraserIcon,
  HandshakeIcon,
  HouseIcon,
  ImageIcon,
  PackageIcon,
  QuoteIcon,
  SparklesIcon,
  StarIcon,
  ThumbsUpIcon,
  UsersIcon,
  WandSparklesIcon,
  ZapIcon,
  CheckCircleIcon,
} from 'lucide-react'
import Image from 'next/image'

const listService = [
  {
    icon: <HouseIcon className="size-8 text-blue-600" />,
    title: 'Visual Staging',
    description:
      'Transform empty spaces into beautifully furnished homes that captivate potential buyers.',
    featured: true,
  },
  {
    icon: <WandSparklesIcon className="size-8 text-purple-600" />,
    title: 'Virtual Renovation',
    description: 'Reimagine properties with stunning renovations before any physical work begins.',
    featured: true,
  },
  {
    icon: <ImageIcon className="size-8 text-green-600" />,
    title: 'HDR Photography',
    description: 'Professional imagery that showcases your property in the best possible light.',
  },
  {
    icon: <PackageIcon className="size-8 text-orange-600" />,
    title: '3D Virtual Tours',
    description:
      'Immersive 360° experiences that let buyers explore every corner of your property.',
  },
  {
    icon: <ZapIcon className="size-8 text-yellow-600" />,
    title: 'Image Enhancement',
    description: 'Perfect your photos with professional editing and color correction.',
  },
  {
    icon: <EraserIcon className="size-8 text-red-600" />,
    title: 'Object Removal',
    description: 'Clean up your images by removing unwanted elements seamlessly.',
  },
]

const metricData = [
  {
    num: '12K+',
    title: 'Projects Completed',
    subtitle: 'Successfully delivered',
  },
  {
    num: '98%',
    title: 'Client Satisfaction',
    subtitle: 'Happy customers',
  },
  {
    num: '24h',
    title: 'Average Turnaround',
    subtitle: 'Fast delivery',
  },
  {
    num: '50+',
    title: 'Team Members',
    subtitle: 'Expert professionals',
  },
]

const listWhyUs = [
  {
    icon: <CheckCircleIcon className="size-8 text-white" />,
    title: 'Quality Guaranteed',
    description: 'Every project undergoes rigorous quality checks to ensure perfection.',
  },
  {
    icon: <ClockIcon className="size-8 text-white" />,
    title: 'Lightning Fast',
    description: 'Get your transformed images within 24 hours, sometimes even faster.',
  },
  {
    icon: <UsersIcon className="size-8 text-white" />,
    title: 'Dedicated Support',
    description: 'Personal assistance throughout your entire project journey.',
  },
  {
    icon: <ThumbsUpIcon className="size-8 text-white" />,
    title: 'Satisfaction Promise',
    description: "We work until you're completely satisfied with the results.",
  },
  {
    icon: <HandshakeIcon className="size-8 text-white" />,
    title: 'Expert Team',
    description: 'Skilled professionals with years of real estate visualization experience.',
  },
  {
    icon: <EarthIcon className="size-8 text-white" />,
    title: 'Global Reach',
    description: 'Serving clients worldwide with localized market expertise.',
  },
]

const listCustomer = [
  {
    imageUrl: 'https://picsum.photos/id/10/400',
    name: 'Sarah Mitchell',
    role: 'Real Estate Agent',
    rating: 5,
    review:
      'SanSan Studio transformed my listings completely. The virtual staging helped me sell properties 30% faster!',
  },
  {
    imageUrl: 'https://picsum.photos/id/10/400',
    name: 'Michael Chen',
    role: 'Property Developer',
    rating: 5,
    review:
      'The quality and attention to detail is exceptional. My properties look stunning after their virtual renovations.',
  },
  {
    imageUrl: 'https://picsum.photos/id/10/400',
    name: 'Emma Rodriguez',
    role: 'Home Stager',
    rating: 5,
    review:
      'Fast turnaround and incredible results. My clients are always amazed by the before and after comparisons.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative md:px-20 px-10 mx-auto py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent leading-tight mb-6">
              Where Empty Spaces
              <br />
              Become Dream Homes
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Professional virtual staging and renovation services that help you sell properties
              faster and at higher prices. See the transformation before making any physical
              changes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg">
                Get Started Today
                <ArrowRightIcon className="ml-2 size-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="md:px-20 px-10 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading virtual solutions designed to make your properties irresistible
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {listService
              .filter((service) => service.featured)
              .map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-blue-200 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                      Learn More
                      <ArrowRightIcon className="ml-2 size-4" />
                    </Button>
                  </div>
                </div>
              ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {listService
              .filter((service) => !service.featured)
              .map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-purple-600 text-white">
        <div className="md:px-20 px-10 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Our track record speaks for itself with thousands of successful projects
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metricData.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{item.num}</div>
                <div className="text-lg font-semibold mb-1">{item.title}</div>
                <div className="text-blue-100 text-sm">{item.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="md:px-20 px-10 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose SanSan Studio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with creative expertise to deliver exceptional
              results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listWhyUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="md:px-20 px-10 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <QuoteIcon className="size-4" />
                About SanSan Studio
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transforming Real Estate
                <br />
                Marketing Since 2020
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Welcome to SanSan Studio, your premier destination for virtual staging and real
                estate visualization. We specialize in transforming empty spaces into stunning,
                market-ready properties that captivate potential buyers and accelerate sales.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of creative professionals combines artistic vision with technical expertise
                to deliver exceptional results that help our clients stand out in competitive
                markets. We're passionate about helping you showcase properties in their best light.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold">
                  About Us
                  <ArrowRightIcon className="ml-2 size-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50"
                >
                  Contact Team
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-linear-to-br from-blue-100 to-purple-100 rounded-3xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">S</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="size-5 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 font-semibold">SanSan Studio</p>
                      <p className="text-gray-600">Excellence in Virtual Staging</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="md:px-20 px-10 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our satisfied clients have to say about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {listCustomer.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <StarIcon key={i} className="size-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{item.review}"</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-600">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-purple-600 text-white">
        <div className="md:px-20 px-10 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Property?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have sold their properties faster and at better
            prices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg">
              Start Your Project
              <ArrowRightIcon className="ml-2 size-5" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
