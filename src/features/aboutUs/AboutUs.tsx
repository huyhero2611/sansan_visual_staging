'use client'

import React from 'react'

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="md:px-20 px-10 mx-auto py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent leading-[150%]">
          About Us
        </h1>
        <p className="mt-6 text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Discover our story, mission, and the passionate team behind Sansan's 
          exceptional visual staging and renovation services.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-10 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded with a vision to transform spaces and elevate property presentations, 
              Sansan has become a trusted name in virtual staging and renovation services. 
              Our journey began with a simple goal: to help property owners showcase the 
              full potential of their spaces.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Over the years, we've helped countless clients transform empty properties 
              into stunning showcases, making them more appealing to potential buyers and 
              renters. Our commitment to excellence and attention to detail has earned us 
              a reputation for delivering exceptional results.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we continue to innovate and push the boundaries of what's possible 
              in virtual staging and renovation, always keeping our clients' needs at the 
              forefront of everything we do.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">S</span>
              </div>
              <p className="text-gray-700 font-semibold">Sansan</p>
              <p className="text-gray-600 text-sm">Transforming Spaces Since 2020</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're driven by a commitment to excellence, innovation, and client satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every project, delivering outstanding results that exceed expectations
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace cutting-edge technology and creative solutions to transform spaces beautifully
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Client Focus</h3>
              <p className="text-gray-600">
                Our clients' success is our success, and we're dedicated to achieving their goals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-linear-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-10 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work With Us?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's transform your space and bring your vision to life with our expert staging and renovation services.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg">
            View Our Portfolio
          </button>
          <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  )
}
