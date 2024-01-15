import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

interface Breadcrumb {
  name: string;
  href: string;
  current: boolean;
}

interface StepperProps {
  breadcrumbs: Breadcrumb[];
  currentIndex: number;
}


// Step Navigator
export default function StepperNav(props: StepperProps) {
  return (
    <div className='w-full px-6 py-4 bg-white border-b border-gray-200 fixed top-0 z-10'>
      <div className='flex justify-between items-center mb-6'>
        {/* Header title */}
        <h2 className='font-inter text-2xl text-gray-900 font-bold'>Select Agreements, Notices and Other Documents</h2>
        {/* Save & Close button */}
        <button
          type="button"
          className="inline-flex justify-center rounded-md border px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center gap-2  border-gray-200"
        >
          <div className='flex items-center justify-center w-4 h-4'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="9"
              fill="none"
              viewBox="0 0 10 9"
            >
              <path
                fill="#1F2A37"
                d="M8.809 7.066c.33.305.33.838 0 1.143a.788.788 0 01-.559.229.804.804 0 01-.584-.229L5 5.543 2.309 8.209a.788.788 0 01-.559.229.804.804 0 01-.584-.229.783.783 0 010-1.143l2.666-2.691-2.666-2.666a.783.783 0 010-1.143.783.783 0 011.143 0L5 3.232 7.666.566a.783.783 0 011.143 0c.33.305.33.838 0 1.143L6.143 4.4l2.666 2.666z"
              ></path>
            </svg>
          </div>
          <span>Save & Close</span>
        </button>
      </div>
      <div className="">
        {/* Breadcrumb navigation */}
        <nav className="flex" aria-label="Breadcrumb">
          <div className="flex items-center gap-2.5 overflow-x-auto">
            {props?.breadcrumbs.map((breadcrumb, index) => (
              <Fragment key={index}>
                {/* Separator icon */}
                {index > 0 && (
                  <div className="flex items-center w-4 h-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      fill="none"
                      viewBox="0 0 16 17"
                    >
                      <path
                        fill="#9CA3AF"
                        d="M13.434 8.959L9.37 13.022a.788.788 0 01-.559.228.804.804 0 01-.583-.229.783.783 0 010-1.142l2.666-2.691h-7.77a.802.802 0 01-.813-.813c0-.432.356-.813.813-.813h7.77L8.229 4.896a.783.783 0 010-1.142.783.783 0 011.142 0l4.063 4.062c.33.305.33.838 0 1.143z"
                      ></path>
                    </svg>
                  </div>
                )}
                {/* Breadcrumb item */}
                <Popover>
                  {({ open }) => (
                    <>
                      <div
                        // to={breadcrumb.href} 
                        className={`block leading-[19px] cursor-default text-sm font-semibold text-gray-600 hover:text-orange-500 hover:border-orange-500 focus:outline-none  px-4 py-3 rounded-md border-[1.5px] border-gray-200 whitespace-nowrap  ${index < props?.currentIndex ? '!text-green-500' : 'text-gray-600'} 
                        ${props?.currentIndex === index ? 'text-orange-500 bg-orange-50 ring-1 ring-orange-500 border-orange-500' : ''}`}>
                        {breadcrumb.name}
                        <span className="sr-only">
                          {index + 1 === props?.breadcrumbs.length ? '(current page)' : ''}
                        </span>
                      </div>

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
