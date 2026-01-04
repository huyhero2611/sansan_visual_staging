import { Button } from '@/components/ui/button'
import {
  ArrowRightIcon,
  ArrowRightLeftIcon,
  BuildingIcon,
  ClockIcon,
  EarthIcon,
  EraserIcon,
  GemIcon,
  HandshakeIcon,
  HouseIcon,
  ImageIcon,
  PackageIcon,
  QuoteIcon,
  SettingsIcon,
  ThumbsUpIcon,
  UsersIcon,
  WandSparklesIcon,
  XIcon,
  ZapIcon,
} from 'lucide-react'
import Image from 'next/image'

const listService = [
  {
    icon: <HouseIcon className="size-12 text-gray-500" />,
    title: 'Visual Staging',
    description:
      'Powerful real estate marketing tool in which a home is staged virtually using advanced staging software.',
  },
  {
    icon: <WandSparklesIcon className="size-12 text-gray-500" />,
    title: 'Virtual Renovation',
    description:
      'Virtual renovation and remodeling allow you to reimagine and renovate property from start to finish without the time and resources required for a real-world renovation.',
  },
  {
    icon: <ImageIcon className="size-12 text-gray-500" />,
    title: 'HDR',
    description:
      'Experience the pinnacle of real estate imagery—refined for speed, consistency, and uncompromising quality.',
  },
  {
    icon: <PackageIcon className="size-12 text-gray-500" />,
    title: 'Matterport Virtual Staging',
    description:
      'Virtual staging of matterport 3D virtual tours or matterport virtual staging is the process of transforming an empty, unfurnished matterport virtual tour of a property into a tasteful furnishing that allows your buyers to visualize the property through interactive 3d walkthroughs.',
  },
  {
    icon: <ZapIcon className="size-12 text-gray-500" />,
    title: 'Ambient Flash',
    description:
      'Authenticity refined. Experience true-to-life colors and razor-sharp clarity through our advanced Ambient Flash blending.',
  },
  {
    icon: <XIcon className="size-12 text-gray-500" />,
    title: 'Occupied to Vacant',
    description: 'Remove dated or cluttered furnishings from your listing images.',
  },
  {
    icon: <ArrowRightLeftIcon className="size-12 text-gray-500" />,
    title: 'Day To Dusk',
    description: 'Turn daylight home photos into eye catching dusk images.',
  },
  {
    icon: <EraserIcon className="size-12 text-gray-500" />,
    title: 'Object Removal',
    description: 'Remove unwanted or distracting items from your listing photos.',
  },
  {
    icon: <SettingsIcon className="size-12 text-gray-500" />,
    title: 'Image Enhancement',
    description: 'Brighten, sharpen, balance, and remove reflections in your listing photos.',
  },
  {
    icon: <BuildingIcon className="size-12 text-gray-500" />,
    title: 'Floor Plan',
    description: 'Create accurate representations and spatial arrangement of the rooms.',
  },
  {
    icon: <GemIcon className="size-12 text-gray-500" />,
    title: '360° Virtual Tours',
    description:
      'Create a beautifully immersive virtual tour of your listing using 360 degree images.',
  },
]

const metricData = [
  {
    num: 12575,
    title: 'Projects Finished',
  },
  {
    num: 1686,
    title: 'Satisfied Clients',
  },
  {
    num: 201,
    title: 'Projects in Progress',
  },
  {
    num: 56,
    title: 'Team Member',
  },
]

const listWhyUs = [
  {
    icon: <UsersIcon className="size-12 text-[#eaeaea]" />,
    title: 'We Simply Care',
    description:
      'We want to get to know you on both a professional and personal level in order to create an atmosphere that fosters a long-term relationship of exceptional service.',
  },
  {
    icon: <ClockIcon className="size-12 text-[#eaeaea]" />,
    title: 'Fast',
    description:
      'Our fast delivery speed is one of our standout advantages, with the ability to get your product to you in less than 24 hours after placing an order, ensuring a quick response to all customer needs.',
  },
  {
    icon: <ArrowRightLeftIcon className="size-12 text-[#eaeaea]" />,
    title: 'Satisfaction Guaranteed',
    description:
      'Our goal is to achieve 100% satisfaction, with services and solutions that will keep you coming back month after month. Our process ensures that both you and your customers will be satisfied.',
  },
  {
    icon: <ThumbsUpIcon className="size-12 text-[#eaeaea]" />,
    title: 'No Contracts',
    description:
      'That’s right! NO CONTRACTS! We want you to do business with us because of our excellent customer service and professional solutions, not by obligation!',
  },
  {
    icon: <HandshakeIcon className="size-12 text-[#eaeaea]" />,
    title: 'Expert Guidance',
    description:
      'We partner with the best architect and solution providers. We believe that the best quality services should be accessible to every clients.',
  },
  {
    icon: <EarthIcon className="size-12 text-[#eaeaea]" />,
    title: 'World-Wide Expertise',
    description:
      'We have knowledge of international markets and trends, and our expertise and experience serve customers all over the world.',
  },
]

const mockImages = [
  'https://picsum.photos/id/15/400',
  'https://picsum.photos/id/16/400',
  'https://picsum.photos/id/17/400',
  'https://picsum.photos/id/21/400',
  'https://picsum.photos/id/19/400',
  'https://picsum.photos/id/20/400',
]

const listCustomer = [
  {
    imageUrl: 'https://picsum.photos/id/10/400',
    name: 'Willbert Duke',
    review:
      '“ I was hesitant at first, but virtual staging made a huge difference in presenting my property. The professionally designed images helped buyers visualize the potential, and I received multiple offers in no time. ”',
  },
  {
    imageUrl: 'https://picsum.photos/id/10/400',
    name: 'Jennifer Lee',
    review:
      "“ Virtual staging exceeded my expectations. The photos showcased my property's best features, and the results were amazing. I had a quick sale and even got a higher price than I had hoped for. Highly recommend it! ”",
  },
  {
    imageUrl: 'https://picsum.photos/id/10/400',
    name: 'Bobby Kim',
    review:
      "“ I couldn't believe how cost-effective and efficient virtual staging was. The transformed photos of my property were so convincing that potential buyers thought the furniture was real. It made all the difference in selling my home. ”",
  },
]

export default function Home() {
  return (
    <div className="">
      <div className="md:px-20 px-10 mx-auto py-20">
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl font-bold">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
            {listService.map(({ icon, title, description }, index) => (
              <div key={index} className="flex flex-col gap-4">
                {icon}
                <h3 className="text-2xl font-bold">{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metricData.map((item, index) => (
            <div key={index} className="flex flex-col gap-0 items-center">
              <p className="md:text-[80px] text-[60px] font-bold text-[#709aa8]">{item.num}</p>
              <p className="font-bold text-white md:text-xl text-lg">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1c8eff]">
        <div className="md:px-20 px-10 mx-auto py-20 text-[#eaeaea]">
          <div className="flex flex-col gap-10">
            <h1 className="text-5xl font-bold">Why Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {listWhyUs.map(({ icon, title, description }, index) => (
                <div key={index} className="flex flex-col gap-4">
                  {icon}
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-20 px-10 mx-auto py-20">
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl font-bold">Who we are</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="w-full lg:max-w-[540px] flex flex-col gap-4">
              <p className="text-lg">
                Welcome to SanSan Studio, your trusted source for Virtual Staging and Real Estate
                solutions. We are passionate about providing you with high-quality content designed
                to enhance your virtual staging experience.
                <br />
                Our focus is on delivering top-tier
                Virtual Staging services, bolstered by our unwavering commitment to dependability
                and effective product promotion. We hope you find our services as enjoyable as we
                find providing them to you.
              </p>
              <Button className="rounded-sm">
                See more <ArrowRightIcon />
              </Button>
            </div>

            <div className="w-full lg:max-w-[540px] flex flex-col gap-4 relative">
              <div className="absolute h-full w-1/2 top-0 right-[-20px] bg-[#a8c5e2] z-[-1]" />
              <QuoteIcon className="size-12 text-gray-500" />
              <p className="text-[28px]">
                <i>
                  "We are building a fire, and everyday we train, we add more fuel. At just the
                  right moment, we light the match."
                </i>
              </p>
              <i className="text-xl text-gray-500">Founder, SanSan Studio</i>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto flex">
        {mockImages.map((image, index) => (
          <Image key={index} src={image} alt="" width={400} height={400} />
        ))}
      </div>

      <div className="md:px-20 px-10 py-32 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center">
          {listCustomer.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-4 bg-[#d1d1d347] rounded-2xl p-8 items-center w-full lg:max-w-[360px]"
            >
              <Image src={item.imageUrl} alt="" width={80} height={80} className="rounded-full" />
              <h3 className="text-2xl font-bold">{item.name}</h3>
              <p>{item.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
