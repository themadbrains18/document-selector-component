import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

interface Breadcrumb {
  name: string;
  href: string;
  current: boolean;
}

interface StepperProps {
  breadcrumbs: Breadcrumb[];
  currentIndex: number;
  setCurrentIndex: Function;
}


// Step Navigator
export default function StepperNav(props: StepperProps) {
  return (
    <div className='w-full px-6 py-4 bg-white border-b border-gray-200 fixed top-0 z-20'>
      <div className='flex justify-between items-center mb-6'>
        {/* Header title */}
        <h2 className='font-inter text-2xl text-gray-900 font-bold'>Select Agreements, Notices and Other Documents</h2>
        {/* Save & Close button */}
        <button
          type="button"
          className="inline-flex justify-center rounded-md border px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center gap-2  border-gray-200"
        >
          <div className='flex items-center justify-center w-4 h-4'>
            <img src='/icons/cross-button.svg' alt='Close icon' />
          </div>
          <span>Save & Close</span>
        </button>
      </div>
      <div className="">
        {/* Breadcrumb navigation */}
        <nav className="flex" aria-label="Breadcrumb">
          <div className="flex items-center  gap-2.5 overflow-x-auto justify-between w-full">
            {props?.breadcrumbs.map((breadcrumb, index) => (
              <Fragment key={index}>
                {/* Separator icon */}
                {index > 0 && (
                  <div className="flex items-center w-4 h-4 ">
                    <img src='/icons/seprator-arrow.svg' alt='seprator arroe icon' />
                  </div>
                )}
                {/* Breadcrumb item */}
                <Popover>
                  {({ open }) => (
                    <>
                      <Link
                        onClick={() => props?.setCurrentIndex(index)}
                        to={`/dashboard/documents/${breadcrumb.href}`}
                        className={`block leading-[19px] text-sm font-semibold text-gray-600 hover:text-[#ff8a4c] hover:border-[#ff8a4c] focus:outline-none  px-4 py-3 rounded-md border-[1.5px] border-gray-200 whitespace-nowrap  ${index < props?.currentIndex ? '!text-green-500 hover:border-gray-200' : 'text-gray-600'} 
                        ${props?.currentIndex === index ? 'text-orange-500 bg-orange-50 border-orange-500' : ''}`}>
                        {breadcrumb.name}
                        <span className="sr-only">
                          {index + 1 === props?.breadcrumbs.length ? '(current page)' : ''}
                        </span>
                      </Link>

                      {/* Breadcrumb details */}
                      <Transition
                        as={Fragment}
                        enter="transition duration-100 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Popover.Panel className="hidden sm:block absolute z-10 top-full left-1/2 transform -translate-x-1/2 mt-2 overflow-hidden rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div className="p-4">
                            <p className="text-sm text-gray-500">
                              You are here: {breadcrumb.name}
                              {index + 1 === props?.breadcrumbs.length ? ' (current page)' : ''}
                            </p>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Fragment>
            ))}
          </div>
        </nav>

      </div>
    </div>
  );
}
