import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, PropsWithChildren } from 'react';

import { sansationFont } from '@/components/Layout';

type Props = PropsWithChildren & {
  show: boolean;
  onClose: (value: boolean) => void;
  title?: string;
};

export const ModalDialog = ({ children, show, onClose, title }: Props) => {
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as='div' className={`fixed inset-0 z-10 overflow-y-auto ${sansationFont.className}`} onClose={onClose}>
        <div className='min-h-screen px-4 text-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 backdrop-filter backdrop-blur-sm' />
          </Transition.Child>
          <span className='inline-block h-screen align-middle' aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div className='inline-block bg-blue-800 w-full max-w-screen-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform drop-shadow-[0_0_10px_rgba(123,123,171,1)] shadow-purple rounded-2xl'>
              {title && (
                <Dialog.Title as='h3' className='text-h3 font-medium'>
                  {title}
                </Dialog.Title>
              )}
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};