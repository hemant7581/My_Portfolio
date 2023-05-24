// import React from 'react';

function Portfolio() {
  return (
    <div>
      <section id="about" className="bg-white text-gray-800 p-4">
        <h2 className="font-bold text-2xl mb-4">About</h2>
        <p className="mb-4">Insert your bio here...</p>
      </section>
      <section id="projects" className="bg-gray-100 text-gray-800 p-4">
        <h2 className="font-bold text-2xl mb-4">Projects</h2>
        <div className="flex flex-wrap gap-x-4">
          {/* Insert your projects here */}
        </div>
      </section>
      <section id="contact" className="bg-white text-gray-800 p-4">
        <h2 className="font-bold text-2xl mb-4">Contact</h2>
        <p className="mb-4">Insert your contact info here...</p>
      </section>
    </div>
  );
}

export default Portfolio;