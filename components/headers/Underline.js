import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { Transition } from '@headlessui/react'
import useClickAway from 'components/util/useClickAway'
import DarkModeToggle from 'components/widgets/DarkModeToggle'

const links = [
  { href: "/about", title: "About" },
]

const Header = ({dark}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useClickAway(() => setMobileMenuOpen(false))

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setMobileMenuOpen(false))

    return () => {
      Router.events.off('routeChangeStart', () => setMobileMenuOpen(false))
    }
  }, [])

  return (
    <header className="px-4 pt-6 md:px-8 md:pt-12">
      <nav className="border-b border-gray-200 dark:border-gray-500">
        <div className="flex flex-row items-end justify-between mx-4 -mb-px lg:mx-8">
          <Link href="/">
            <a>
              <h2 className="flex flex-row items-center text-4xl md:text-5xl pb-0.5 hover:pb-0 hover:border-b-2 dark:hover:border-white hover:border-black">
                <span className="w-6 h-6 mr-1 md:h-7 md:w-7 md:mr-2">
                  <svg viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g transform="matrix(0.5,0,0,0.5,0,0)">
                      <g transform="matrix(1,0,0,1,0,0)">
                        <circle cx="64" cy="64" r="64" fill="currentColor" stroke="" strokeWidth="1px" strokeLinecap="square" vectorEffect="non-scaling-stroke"></circle>
                      </g>
                    </g>
                  </svg>
                </span>
                Novel
                
              </h2>
            </a>
          </Link>
          <a onClick={() => setMobileMenuOpen(true)} className="cursor-pointer md:hidden">
            <div className="inline-block w-8 h-8 m-2">
              <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </div>
          </a>
          <ul className="flex-row items-baseline hidden text-base font-medium tracking-wide md:flex lg:text-xl">
            {links.map(({href, title}) =>
              <Link href={href} key={title}>
                <a>
                  <li className="inline-block mx-2 lg:mx-4 px-1 py-1.5 hover:pb-1 hover:border-b-2 dark:hover:border-white hover:border-black">
                    {title}
                  </li>
                </a>
              </Link>
            )}
            <li className="inline-block h-6 ml-4 -mb-1">
              <DarkModeToggle />
            </li>
          </ul>
        </div>
      </nav>

      <Transition
        className="absolute inset-x-0 top-0 p-2 origin-top-right bg-transparent md:hidden"
        show={mobileMenuOpen}
        enter="transition transform ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition transform ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div ref={mobileMenuRef} className="py-4 pl-2 pr-6 -m-px bg-white border border-gray-200 rounded dark:bg-gray-800 dark:border-gray-500">
          <div className="text-right">
            <a onClick={() => setMobileMenuOpen(false)} className="cursor-pointer">
              <div className="inline-block w-8 h-8 m-2">
                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
              </div>
            </a>
          </div>
          <ul className="text-xl font-medium uppercase">
            <Link href="/">
              <a>
                <li className="px-1 pb-3 mx-2 mb-1 border-b-2 lg:mx-4">
                  <h2>Home</h2>
                </li>
              </a>
            </Link>
            {links.map(({href, title}) =>
              <Link href={href} key={title}>
                <a>
                  <li className="px-1 py-3 mx-2 border-b-2 lg:mx-4">
                    {title}
                  </li>
                </a>
              </Link>
            )}
          </ul>
        </div>
      </Transition>
    </header>
  )
}

export default Header

