
// import React from 'react'

function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-gray-100 mr-6">
        {/* <img src="path/to/logo-or-profile-pic" alt="Logo or Profile" className="rounded-full w-16 h-16 mr-2" /> */}
        <span className="font-semibold text-xl tracking-tight">Hemant Srivastav</span>
      </div>
      <div className="flex items-center">
        <a href="#about" className="text-gray-100 hover:text-white mr-4">About</a>
        <a href="#projects" className="text-gray-100 hover:text-white mr-4">Projects</a>
        <a href="#contact" className="text-gray-100 hover:text-white">Contact</a>
      </div>
    </nav>
  );
}

export default Header;
