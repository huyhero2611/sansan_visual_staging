import {
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
  SettingsIcon,
  ThumbsUpIcon,
  UsersIcon,
  WandSparklesIcon,
  XIcon,
  ZapIcon,
} from 'lucide-react'

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

export default function Home() {
  return (
    <div className="">
      <div className="container mx-auto py-20">
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
        <div className="flex justify-center gap-20">
          {metricData.map((item, index) => (
            <div key={index} className="flex flex-col gap-0 items-center">
              <p className="text-[80px] font-bold text-[#709aa8]">{item.num}</p>
              <p className="font-bold text-white text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1c8eff]">
        <div className="container mx-auto py-20 text-[#eaeaea]">
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
    </div>
  )
}
