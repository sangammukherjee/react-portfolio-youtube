import { useState } from "react";
import logo from "../../images/logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "../../data";
import { Dialog } from "@headlessui/react";
import {scroller} from 'react-scroll'

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function handleNavigate(id){
   scroller.scrollTo(id, {
    smooth : true,
    duration :1000
   })
  }

  return (
    <header className="border-b-[1px] border-bgRed fixed bg-blackBg inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between py-3 px-8">
        <div className="flex lg:flex-1">
          <a className="-m-1.5 p-1.5" href="#">
            <span className="sr-only">Your Website Name</span>
            <img className="h-14 w-auto" src={logo} alt="Your Website Name" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setShowMobileMenu(true)}
          >
            <span className="sr-only">Open Menu</span>
            <Bars3Icon color="#fff" className="h-6 w-6" aria-hidden={"true"} />
          </button>
        </div>
        <ul className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <li
              key={item.name}
              className="text-sm font-semibold leading-6 text-textColor cursor-pointer"
              onClick={()=>handleNavigate(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <label onClick={()=>handleNavigate('contact')} className="text-sm font-semibold leading-6 text-textColor cursor-pointer">
            Contact Me <span aria-hidden="true">&rarr;</span>
          </label>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
      >
        <Dialog.Panel
          className={
            "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blackBg px-6 py-6 sm:max-w-sm"
          }
        >
          <div className="flex items-center justify-between">
            <a className="-m-1.5 p-1.5" href="#">
              <span className="sr-only">Your Website Name</span>
              <img className="h-14 w-auto" src={logo} alt="Your Website Name" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={()=> setShowMobileMenu(false)}
            >
              <span className="sr-only">Close Menu</span>
              <XMarkIcon  color="#fff" className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <ul className="space-y-6 py-6">
                {navigation.map((item) => (
                  <li
                    className="text-sm font-semibold leading-6 text-textColor cursor-pointer"
                    key={item.name}
                    onClick={()=> {
                      setShowMobileMenu(false);
                      handleNavigate(item.id)
                    }}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
              <div className="py-6">
                <label  onClick={()=> {
                      setShowMobileMenu(false);
                      handleNavigate('contact')
                    }} className="text-sm font-semibold leading-6 text-textColor cursor-pointer">
                  Contact Me <span aria-hidden="true">&rarr;</span>
                </label>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
