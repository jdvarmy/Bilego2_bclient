import React, { ReactNode } from 'react';

import { PreferenceMode } from '@/features/menu/head/ui/preference-mode';
import { Logo } from '@/features/menu/left/ui/logo';

export const MenuHead = (props: { leftSide?: ReactNode; rightSide?: ReactNode }) => {
  return (
    <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-4'>
      <div className='col-span-2 flex items-center justify-start'>
        {props.leftSide}
        <PreferenceMode />
        <Logo />
      </div>
      <div className='flex items-center justify-end'>{props.rightSide}</div>
    </div>
  );
};
