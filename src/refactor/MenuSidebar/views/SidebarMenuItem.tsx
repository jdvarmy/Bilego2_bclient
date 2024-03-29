import React from 'react';

import css from '@/refactor/MenuSidebar/styles/li.module.css';
import { UiRouterLink } from '@/shared/uikit/ui-router-link';

export const SidebarMenuItem = ({
  Icon,
  active,
  ...item
}: {
  name: string;
  slug: string;
  active: boolean;
  Icon?: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>>;
}) => {
  return (
    <li className={`relative list-none ${css.li} ${active && css.active}`}>
      <UiRouterLink href={item.slug} className='relative flex whitespace-nowrap'>
        <div className='relative flex items-center justify-center min-w-[24px] h-[50px] transition-all'>
          <Icon className='z-10 relative left-[13px]' />
        </div>
        <div className='relative flex h-[50px] items-center text-xs pl-10 uppercase transition-all'>{item.name}</div>
      </UiRouterLink>
    </li>
  );
};
