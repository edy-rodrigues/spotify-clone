'use client';
import { HomeFilledIcon } from '@/components/icons/home-filled-icon';
import { HomeIcon } from '@/components/icons/home-icon';
import { usePathname } from '@/i18n/navigation';

export function HomeIconClient() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return isHomePage ? (
    <HomeFilledIcon className="fill-white size-6" />
  ) : (
    <HomeIcon className="fill-text-gray size-6" />
  );
}
