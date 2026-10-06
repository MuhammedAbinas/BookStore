import React from 'react'
import Header from '../components/Header'
import { FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaEnvelope, FaPaperPlane } from 'react-icons/fa'

function Contact() {
  return (
    <>
      <Header />

      <main className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Title */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
              Get In Touch
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Have questions about a book order or need recommendations? We'd love to hear from you. Send us a message or visit our bookstore.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/80 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-xl mb-4">
                <FaPhoneAlt />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Call Us</h3>
              <p className="text-slate-600 text-sm mt-1">+1 (555) 234-5678</p>
              <p className="text-slate-400 text-xs mt-0.5">Mon-Fri from 9am to 6pm</p>
            </div>

            {/* Address Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/80 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xl mb-4">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Visit Us</h3>
              <p className="text-slate-600 text-sm mt-1">2880 Broadway, New York, NY</p>
              <p className="text-slate-400 text-xs mt-0.5">Main Flagship Store</p>
            </div>

            {/* Social Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/80 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-xl mb-4">
                <FaInstagram />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Follow Us</h3>
              <p className="text-slate-600 text-sm mt-1">@bookstore_official</p>
              <p className="text-slate-400 text-xs mt-0.5">Join our reading community</p>
            </div>
          </div>

          {/* Form and Map Grid Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Google Map */}
            <div className="bg-white p-2 rounded-2xl shadow-md border border-slate-200/80 overflow-hidden h-[450px]">
              <iframe 
                title="Store Location"
                className="w-full h-full rounded-xl"
                frameBorder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0" 
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=2880 Broadway, New York&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>

            {/* Send Mail Form */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200/80">
              <div className="flex items-center gap-3 mb-6">
                <FaEnvelope className="text-2xl text-indigo-600" />
                <h2 className="text-2xl font-bold text-slate-900">Send Us a Message</h2>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea 
                    rows="4" 
                    placeholder="How can we help you?" 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3 bg-slate-900 hover:bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 uppercase tracking-wider text-sm flex items-center justify-center gap-2"
                >
                  <FaPaperPlane className="text-xs" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}

export default Contact