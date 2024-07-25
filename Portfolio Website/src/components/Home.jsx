import React from 'react'

function Home() {
  return (
    <section id="home" className="bg-gray-900 text-white h-screen flex items-center justify-center">
    <div className="text-center px-4">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg sm:text-xl lg:text-2xl mb-6">I'm Abhishek Sinha, a Software dev</p>
      <a href="#contact" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold text-lg hover:bg-yellow-600 transition duration-300">
        Get in Touch
      </a>
    </div>
  </section>
  )
}

export default Home