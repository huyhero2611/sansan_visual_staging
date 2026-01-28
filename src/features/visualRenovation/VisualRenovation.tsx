'use client'

import React from 'react'
import CompareImage from 'react-compare-image'
import image1Before from '@/assets/visual-renovation/image-1-before.jpg'
import image1After from '@/assets/visual-renovation/image-1-after.jpg'
import image2Before from '@/assets/visual-renovation/image-2-before.jpg'
import image2After from '@/assets/visual-renovation/image-2-after.jpg'
import image3Before from '@/assets/visual-renovation/image-3-before.jpg'
import image3After from '@/assets/visual-renovation/image-3-after.jpg'
import image4Before from '@/assets/visual-renovation/image-4-before.jpg'
import image4After from '@/assets/visual-renovation/image-4-after.jpg'

const visualRenovationData = [
  {
    id: 1,
    before: image1Before.src,
    after: image1After.src,
    title: 'E40th Street Living Room Renovation',
    description: 'Complete living room transformation with modern furnishings and elegant design',
  },
  {
    id: 2,
    before: image2Before.src,
    after: image2After.src,
    title: 'Oakbrook Property Makeover',
    description: 'Stunning renovation showcasing premium finishes and contemporary style',
  },
  {
    id: 3,
    before: image3Before.src,
    after: image3After.src,
    title: 'East 72nd Street Bedroom Conversion',
    description: 'Space optimization creating a functional and beautiful bedroom layout',
  },
  {
    id: 4,
    before: image4Before.src,
    after: image4After.src,
    title: 'East 72nd Street Master Bedroom',
    description: 'Luxurious master bedroom renovation with sophisticated design elements',
  },
]

export default function VisualRenovation() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="md:px-20 px-10 mx-auto py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent leading-[150%]">
          Visual Renovation
        </h1>
        <p className="mt-6 text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Explore our renovation services that breathe new life into existing spaces. 
          Witness the remarkable transformations from outdated to extraordinary.
        </p>
      </div>

      {/* Before/After Gallery */}
      <div className="max-w-7xl mx-auto px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {visualRenovationData.map((item) => (
            <div key={item.id} className="group">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-4/3 overflow-hidden cursor-pointer">
                  <CompareImage
                    leftImage={item.before}
                    rightImage={item.after}
                    leftImageLabel="Before"
                    rightImageLabel="After"
                    sliderLineColor="white"
                    sliderLineWidth={2}
                    handleSize={40}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-linear-to-r from-green-600 to-teal-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Renovate Your Space?</h2>
            <p className="text-lg mb-8 text-green-100">
              Let our renovation experts transform your property into the space of your dreams.
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Start Your Renovation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
