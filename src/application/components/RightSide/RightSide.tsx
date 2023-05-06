import React, { PropsWithChildren } from 'react';

export const RightSide = ({ children }: PropsWithChildren) => {
  return (
    <div className='relative ml-menu flex flex-col w-[calc(100%_-_280px)] bg-blue-900 py-9.5 px-20 overflow-x-hidden'>
      {children}
    </div>
  );
};
