'use client'

import React from 'react'
import CompareImage from 'react-compare-image'
import image1Before from '@/assets/visualStaging/image-1-before.jpg'
import image1After from '@/assets/visualStaging/image-1-after.jpg'
import image2Before from '@/assets/visualStaging/image-2-before.jpg'
import image2After from '@/assets/visualStaging/image-2-after.jpg'
import image3Before from '@/assets/visualStaging/image-3-before.jpg'
import image3After from '@/assets/visualStaging/image-3-after.jpg'
import image4Before from '@/assets/visualStaging/image-4-before.jpg'
import image4After from '@/assets/visualStaging/image-4-after.jpg'

const visualStagingData = [
  {
    id: 1,
    before: image1Before.src,
    after: image1After.src,
    title: 'Outdoor Space',
    description: 'Transform your outdoor area into a beautiful living space',
  },
  {
    id: 2,
    before: image2Before.src,
    after: image2After.src,
    title: 'Dumfries Circle Living Room & Kitchen',
    description: 'Modern open-concept living room and kitchen combination',
  },
  {
    id: 3,
    before: image3Before.src,
    after: image3After.src,
    title: 'Living Room & Kitchen Design',
    description: 'Stylish living room and kitchen with contemporary furnishings',
  },
  {
    id: 4,
    before: image4Before.src,
    after: image4After.src,
    title: 'Park Hill at Issaquah Balcony',
    description: 'Elegant balcony space with scenic views and modern decor',
  },
]

export default function VisualStaging() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="md:px-20 px-10 mx-auto py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent leading-[150%]">
          Visual Staging
        </h1>
        <p className="mt-6 text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Discover our virtual staging services that transform your properties into stunning
          showcases. See the dramatic before and after transformations below.
        </p>
      </div>

      {/* Before/After Gallery */}
      <div className="max-w-7xl mx-auto px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {visualStagingData.map((item) => (
            <div key={item.id} className="group">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-4/3 overflow-hidden">
                  <CompareImage
                    leftImage={item.before}
                    rightImage={item.after}
                    leftImageLabel="Before"
                    rightImageLabel="After"
                    sliderLineColor="#3b82f6"
                    sliderLineWidth={4}
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
          <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Property?</h2>
            <p className="text-lg mb-8 text-blue-100">
              Let our expert team showcase your property's full potential with professional virtual
              staging.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
