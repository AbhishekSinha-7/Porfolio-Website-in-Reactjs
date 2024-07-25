import React from 'react'

function About() {
  return (
    <section id="about" className="bg-green-500 text-gray-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
          
          <div className="lg:w-2/3 ">
            <p className="mb-4">
              Hello! I'm Abhishek Sinha, a passionate Software developer with experience in following tech stacks -  HTML, CSS, JavaScript, ReactJs, Tailwind CSS.
            </p>
            <p className="mb-4">
              Throughout my career, I've worked on few projects . My goal is to continually grow as a professional and contribute to innovative and impactful projects.
            </p>
            <p>
             I'm always looking for new challenges and opportunities to expand my horizons.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About