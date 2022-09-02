import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faChevronDown, faGear } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import Image from 'next/image';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const NavigationBar = () => {
  return (
    <div className="mx-auto py-5 px-4 w-full max-w-7xl flex sm:flex-row justify-between items-center border-b-2 border-gray-200">

      {/* :TITLES CONTAINER */}
      <div className="sm:mt-0 flex items-center">
        {/* ::Title */}
        <div className='mr-5' style={{ width: 144, height: 64, position: "relative" }}>
          <Image src="/lcr_logo.png" layout='fill' />
        </div>
        {/* ::Welcome Back */}
        <div className="pl-5 hidden sm:block border-l-2 border-gray-200 space-y-0.5">
          <p className="text-xs text-gray-500">Hi, Robin</p>
          <p className="text-lg text-gray-700 font-bold leading-5 tracking-wide">
            <span className="block">Willkommen</span>
            <span className="block">zurück</span>
          </p>
        </div>
      </div>



      {/* :ACTIONS CONTAINER */}
      <div className="flex-shrink-0 px-5 flex items-center space-x-6">

        {/* ::Notification Bell */}
        <a href="#link" className="relative text-gray-500 hover:text-indigo-700">
          {/* :::icon */}
          <FontAwesomeIcon className="text-2xl" icon={faBell} />
          {/* :::status ping */}
          <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500 ring-2 ring-gray-50" />
          <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500 animate-ping" />
        </a>

        {/* ::User Profil */}
        <Menu as="div" className="relative inline-block text-left z-20">
          {({ open }) => (
              <>
            <Menu.Button type="button" className="group align-middle inline-flex items-center space-x-2">
              {/* :::avatar */}
              <span className="flex-shrink-0 inline-block border-2 border-transparent rounded-full shadow overflow-hidden group-hover:border-indigo-700" aria-label="avatar">
                <img src="https://lcr.ch/wp-content/uploads/2021/07/Bildschirmfoto-2021-07-17-um-10.43.01.png" alt="" className="w-10 h-10" />
              </span>

              {/* :::details */}
              <div className="hidden md:flex flex-col space-y-0.5 text-left">
                <p className="text-sm text-gray-700 group-hover:text-indigo-700 font-semibold">Robin Oester</p>
                <p className="text-xs text-gray-500 group-hover:text-indigo-500 font-semibold">robin.oester@gmail.com</p>
              </div>

              {/* :::chevron icon */}
              <span className="text-gray-500 group-hover:text-indigo-700">
                <FontAwesomeIcon className={classNames(open ? "rotate-180" : "rotate-0", "transition-all w-7 h-7")} icon={faChevronDown } />
              </span>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="divide-y origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item disabled>
                    <a className={'text-gray-900 block px-4 py-2 text-sm text-center font-bold'} >
                      Athlet
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                        <a href="#"
                            className={classNames(
                                active ? 'text-indigo-700' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                            )} >
                          <div className="flex items-center">
                            <FontAwesomeIcon className="w-5 h-5 mr-2" icon={faGear} />
                            Einstellungen
                          </div>
                        </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                        <a href="#"
                            className={classNames(
                                active ? 'text-indigo-700' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                            )}>
                          Support
                        </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                        <a href="#"
                            className={classNames(
                                active ? 'text-indigo-700' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                            )} >
                          License
                        </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                        <a href="#"
                           className={classNames(
                               active ? 'text-indigo-700' : 'text-gray-700',
                               'block px-4 py-2 text-sm'
                           )} >
                           <div className="flex items-center">
                             <FontAwesomeIcon className="w-5 h-5 mr-2" icon={faArrowRightFromBracket} />
                             Logout
                           </div>
                        </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
              </>
          )}
        </Menu>
      </div>

    </div>
  )
}

export default NavigationBar
