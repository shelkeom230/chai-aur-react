import React from 'react'

function navbar() {
  return (
    <div>
        <nav class="bg-gray-800 p-2">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Logo</span>
      </div>
      <div class="block lg:hidden">
        <button
          class="text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg
            class="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              class="fill-current"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div class="hidden lg:block">
        <div class="flex space-x-4">
          <a
            href="#"
            class="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </a>
          <a
            href="#"
            class="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Services
          </a>
          <a
            href="#"
            class="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Pricing
          </a>
          <a
            href="#"
            class="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default navbar