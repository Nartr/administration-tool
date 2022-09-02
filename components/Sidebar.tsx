import {RefObject, useEffect, useRef, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronCircleDown, faBars, faXmark, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {

  const [navOpen, setNavOpen] = useState(false) //true if navbar was opened on mobile
  const [active, setActive] = useState<String | undefined>(undefined)
  const [dropdown, setDropdown] = useState<String | undefined>(undefined)

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setDropdown(undefined));

  function useOnClickOutside(ref: RefObject<any>, handler: (e: Event) => void) {
    useEffect(() => {
      const listener = (event: Event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      }
      document.addEventListener("mousedown", listener)
      document.addEventListener("touchstart", listener)
      return () => {
        document.removeEventListener("mousedown", listener)
        document.removeEventListener("touchstart", listener)
      }
    }, [ref, handler])
  }

  return (
    <div className='antialiased flex justify-between'>
      {/* mobile opener */}
      <button className="sm:hidden absolute top-5 leading-[0] right-5 focus:outline-none" onClick={() => setNavOpen(!navOpen)}>
        {!navOpen ?
          <FontAwesomeIcon icon={faBars} /> :
          <FontAwesomeIcon className="text-white" icon={faXmark} />
        }
      </button>

      {/* sidebar */}
      <div
        className={classNames(
          navOpen ? 'sm:w-64 w-screen' : 'sm:w-20 sm:block hidden',
          'bg-gray-900 transition-all duration-300 space-y-2 sm:relative animate-go-in sm:animate-none')}>
        <h1 className={classNames(navOpen ? 'px-4' : 'px-4 xm:px-2',
          'overflow-clip text-base text-center text-white whitespace-nowrap font-black py-4')}>
          {navOpen ? 'LC Regensdorf' : 'LCR' }
        </h1>
        <div className="px-4 space-y-2">
          {/* normal opener */}
          <button className='sm:block hidden focus:outline-none absolute p-1 leading-[0] -right-3 top-10 bg-gray-900 rounded-full shadow-md'
                  onClick={() => {
                    setNavOpen(!navOpen);
                    setDropdown(undefined);
                  }}>
            <FontAwesomeIcon icon={faChevronCircleDown} className={classNames('transition-all duration-300 text-white transform', navOpen ? 'rotate-90' : '-rotate-90')} />
          </button>
          {/* Dashboard */}
          <div onClick={() => setActive('home')}
               className={classNames('flex justify-start text-gray-400 hover:text-gray-200 hover:bg-gray-800 items-center space-x-2 rounded-md p-2 cursor-pointer',
                 active == 'home' ? 'text-gray-200 bg-gray-800' : 'text-gray-400')}>
            <div className="flex overflow-clip items-center pl-2 cursor-pointer">
              <FontAwesomeIcon className="pt-1 pb-1" icon={faHouse} />
              <h1 className={classNames(navOpen ? 'ml-2' : 'hidden')}>
                Dashboard
              </h1>
            </div>
          </div>

          {/* Audience */}
          <div ref={ref} className="relative">
            <div className={classNames('flex overflow-clip justify-start justify-between text-gray-400 hover:text-gray-200 hover:bg-gray-800 items-center space-x-2 rounded-md p-2',
                   active == 'audience' ? 'text-gray-200 bg-gray-800' : 'text-gray-400')}>
              <div onClick={() => {
                setActive('audience');
                if(!navOpen) {
                  setDropdown('audience')
                }
              }}
                className="flex items-center pl-2 cursor-pointer">
                <FontAwesomeIcon className="pt-1 pb-1"  icon={faUser} />
                <h1 className={classNames(navOpen ? 'ml-2' : 'hidden')}>
                  Audience
                </h1>
              </div>
              <button className={classNames(navOpen ? 'cursor-pointer' : 'hidden',
                dropdown == 'audience' ? 'rotate-180' : '-rotate-270')} onClick={() => {
                if(dropdown != 'audience') {
                  setDropdown('audience')
                } else {
                  setDropdown(undefined)
                }
              }}>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            </div>
            <div className={classNames('text-gray-400 space-y-3 mt-2',
              navOpen ? 'border-l border-gray-400 ml-2 pl-4' : 'absolute -top-2 left-16 ml-1 shadow-md z-10 bg-gray-900 rounded-md p-4 border-none w-28',
              dropdown == 'audience' ? '' : 'hidden')}>
              <h1 className="hover:text-gray-200 cursor-pointer">Item 1</h1>
              <h1 className="hover:text-gray-200 cursor-pointer">Item 2</h1>
              <h1 className="hover:text-gray-200 cursor-pointer">Item 3</h1>
              <h1 className="hover:text-gray-200 cursor-pointer">Item 4</h1>
            </div>
          </div>

          <div onClick={() => setActive('calculations')}
               className={classNames('flex justify-start text-gray-400 hover:text-gray-200 hover:bg-gray-800 items-center space-x-2 rounded-md p-2 cursor-pointer',
                 active == 'calculations' ? 'text-gray-200 bg-gray-800' : 'text-gray-400')}>
            <div className="flex overflow-clip items-center pl-2 cursor-pointer">
              <FontAwesomeIcon className="pt-1 pb-1" icon={faHouse} />
              <h1 className={classNames(navOpen ? 'ml-2' : 'hidden')}>
                Calculations
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}