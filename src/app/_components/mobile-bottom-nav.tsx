'use client';

import { Typography } from '@/components/data-display/typography';
import { HomeFilledIcon } from '@/components/icons/home-filled-icon';
import { HomeIcon } from '@/components/icons/home-icon';
import { LibraryIcon } from '@/components/icons/library-icon';
import { SearchIcon } from '@/components/icons/search-icon';
import { SpotifyIcon } from '@/components/icons/spotify-icon';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/cn';
import { Link, usePathname } from '@/i18n/navigation';
import React from 'react';

type Item = {
  href: string;
  label: string;
  icon: React.ElementType;
  activeIcon: React.ElementType;
};

const items: Item[] = [
  { href: '/', label: 'Início', icon: HomeIcon, activeIcon: HomeFilledIcon },
  { href: '/search', label: 'Buscar', icon: SearchIcon, activeIcon: SearchIcon },
  { href: '/library', label: 'Sua Biblioteca', icon: LibraryIcon, activeIcon: LibraryIcon },
  { href: '/premium', label: 'Premium', icon: SpotifyIcon, activeIcon: SpotifyIcon },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegação principal"
      className="fixed inset-x-0 bottom-0 z-50 bg-[linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.9),var(--background-elevation-1))] lg:hidden h-[70px]"
    >
      <ul className="flex items-stretch justify-around">
        {items.map(({ href, label, icon: Icon, activeIcon: ActiveIcon }) => {
          const active = pathname === href;

          return (
            <li key={href} className="flex-1">
              <Button
                asChild
                variant="ghost"
                className={cn(
                  'w-full h-16 flex flex-col gap-1 rounded-none focus-visible:ring-2 focus-visible:ring-ring',
                  active && 'text-white',
                )}
              >
                <Link href={href} aria-current={active ? 'page' : undefined} aria-label={label}>
                  {active ? (
                    <ActiveIcon aria-hidden className="size-6 fill-white" />
                  ) : (
                    <Icon aria-hidden className="size-6 fill-text-gray" />
                  )}
                  <Typography className="text-[11px] leading-none">{label}</Typography>
                </Link>
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
