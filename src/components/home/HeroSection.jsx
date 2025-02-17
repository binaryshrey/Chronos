import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/logo-dark.svg';
import AnimatedHeaderText from './AnimatedHeaderText';
import { Link } from 'react-router-dom';

const handleScroll = () => {
  const element = document.getElementById('features-section');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
          <path fill="url(#9b2541ea-d39d-499b-bd42-aeea3e93f5ff)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
          <defs>
            <linearGradient id="9b2541ea-d39d-499b-bd42-aeea3e93f5ff" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <img className="h-8" src={logo} alt="" />
            </a>
            <h4 className="ml-2 text-gray-900 sm:text-2xl">Chronos</h4>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="https://github.com/binaryshrey/Chronos" className="text-sm font-semibold leading-6 text-gray-900">
              Github
            </a>
            <a onClick={handleScroll} className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
              Features
            </a>
            <a href="https://in.linkedin.com/in/shreyanshsaurabh" className="text-sm font-semibold leading-6 text-gray-900">
              Contact
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
              Log in
            </Link>
          </div>
        </nav>

        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img className="h-8" src={logo} alt="" />
              </a>
              <h4 className="ml-2 text-gray-900 sm:text-2xl">Chronos</h4>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a href="https://github.com/binaryshrey/Chronos" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                    Github
                  </a>
                  <a onClick={handleScroll} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10 cursor-pointer">
                    Features
                  </a>
                  <a href="https://in.linkedin.com/in/shreyanshsaurabh" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                    Contact
                  </a>
                </div>
                <div className="py-6">
                  <Link to="/login" className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
      <main>
        <div className="relative py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <AnimatedHeaderText />
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Project management and</h1>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">issue tracking for everyone</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">Progress, visualize & measure work - the way it works best for you.</p>
              <p className="text-lg leading-8 text-gray-600">Start in three steps, track issues easily and adopt in days, not weeks.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link to="/login" className="rounded-md bg-violet-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600">
                  Get started
                </Link>
                <a href="https://github.com/binaryshrey/Chronos" className="text-base font-semibold leading-7 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img src="https://raw.githubusercontent.com/binaryshrey/Chronos/feat/login/src/assets/product.png" alt="App screenshot" width={2432} height={1442} className="rounded-md shadow-2xl ring-1 ring-gray-900/10" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div id="features-section"></div>
    </div>
  );
};

export default HeroSection;
