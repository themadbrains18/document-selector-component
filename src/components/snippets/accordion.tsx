import React, { useEffect, useRef, useState } from 'react'
import { useDocContext } from '../../context';

// Interface for props passed to Accordion component
interface AccordionProps {
    accordionData: {
        heading: string;
        list: string[];
    };
    isOpen: boolean;
    onToggle: () => void;
}


// Accordion component definition
const Accordion: React.FC<AccordionProps> = ({ accordionData, isOpen, onToggle }) => {
    const { setSelectedDocuments, selectedDocuments } = useDocContext();
    const [contentHeight, setContentHeight] = useState<number | null>(null);
    const contentRef = useRef<HTMLUListElement | null>(null);

    const handleDocumentClick = (item: string) => {
        if (!selectedDocuments.includes(item)) {
            setSelectedDocuments([...selectedDocuments, item]);
        }
    };

    useEffect(() => {
        if (contentRef.current) {
            // Set the height of the content based on its scrollHeight
            setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
        }
    }, [isOpen]);


    return (
        <>
            {/* Accordion header */}
            <div
                className={`flex justify-between items-center p-5 border-gray-200 border-b cursor-pointer last:border-none ${isOpen ? 'bg-gray-100' : ''}`}
                onClick={() => onToggle()}
            >
                {/* Accordion heading */}
                <span className={`font-medium font-inter ${isOpen ? "text-gray-900" : "text-gray-600"}`}  >{accordionData?.heading}</span>

                {/* Accordion toggle icon */}
                <div className={`duration-300 ${isOpen ? "-rotate-180" : ""}`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="11"
                        fill="none"
                        viewBox="0 0 10 11"
                    >
                        <path
                            fill="#111928"
                            stroke="#111928"
                            d="M4.714 7.39h0a.44.44 0 00.297.11l-.297-.11zm0 0l-3.6-3.327h0m3.6 3.326l-3.6-3.326m0 0l-.006-.006m.006.006l-.006-.006m0 0a.334.334 0 01-.082-.108.278.278 0 01-.002-.23.33.33 0 01.079-.108.409.409 0 01.133-.081.465.465 0 01.335.002c.051.02.096.05.13.083h0m-.593.442l.594-.442m0 0l.006.006m-.006-.006l.006.006m0 0L4.672 6.36l.34.313M1.707 3.621l3.303 3.052m0 0l.34-.313m-.34.313l.34-.313m0 0l2.96-2.735a.442.442 0 01.293-.105c.117.001.221.045.293.111.07.065.102.145.103.219a.299.299 0 01-.096.216L5.308 7.39h0m.042-1.03l-.042 1.03m0 0a.44.44 0 01-.297.111l.297-.11z"
                        ></path>
                    </svg>
                </div>
            </div>

            {/* Accordion content */}
            <ul
                ref={contentRef}
                className={`transition-all duration-300 overflow-hidden border-b border-gray-200`}
                style={{ height: contentHeight !== null ? `${contentHeight}px` : 'auto' }}
            >
                {accordionData.list.map((item, index) => (
                    <li key={index} className='py-2 px-[14px] flex items-center justify-between hover:bg-orange-50 rounded-md cursor-pointer mb-[10px] first:my-2 last:py-2' onClick={() => handleDocumentClick(item)}>
                        {/* Document name */}
                        <span className='font-medium text-gray-900 text-sm'>{item}</span>
                        <div className={`p-1 border border-gray-200 rounded`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="none"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill="#1F2A37"
                                    d="M13.434 8.459L9.37 12.522a.788.788 0 01-.559.228.804.804 0 01-.583-.229.783.783 0 010-1.142l2.666-2.691h-7.77a.802.802 0 01-.813-.813c0-.432.356-.813.813-.813h7.77L8.229 4.396a.783.783 0 010-1.142.783.783 0 011.142 0l4.063 4.062c.33.305.33.838 0 1.143z"
                                ></path>
                            </svg>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Accordion
