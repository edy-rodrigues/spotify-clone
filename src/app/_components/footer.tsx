import { MobileBottomNav } from '@/app/_components/mobile-bottom-nav';
import { Typography } from '@/components/data-display/typography';
import { Button } from '@/components/ui/button';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="h-0 lg:h-17.5 flex justify-between items-center">
      {/* Desktop */}
      <div className="hidden lg:flex justify-between items-center pt-[11px] pb-[7px] pl-[14] pr-6 bg-[linear-gradient(90deg,#af2896,#509bf5)] w-full">
        <div>
          <Typography variant="h6" className="text-sm">
            {t('footer.ads.title')}
          </Typography>
          <Typography variant="body1" className="text-base">
            {t('footer.ads.description')}
          </Typography>
        </div>
        <Button variant="default" size="lg">
          {t('footer.ads.button')}
        </Button>
      </div>

      {/* Mobile */}
      <MobileBottomNav />
    </footer>
  );
}
