import React from 'react'

function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Contact Me</h2>
        <div className="max-w-3xl mx-auto">
          <form action="https://formspree.io/f/{your_form_id}" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input type="email" id="email" name="_replyto" required className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea id="message" name="message" rows="4" required className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold text-lg hover:bg-yellow-600 transition duration-300">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact