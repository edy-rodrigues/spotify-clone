import { Typography } from '@/components/data-display/typography';
import { Button } from '@/components/ui/button';
import React from 'react';

export function Footer() {
  return (
    <footer className="flex justify-between items-center pt-[11px] pb-[7px] pl-[14] pr-6 bg-[linear-gradient(90deg,#af2896,#509bf5)]">
      <div>
        <Typography variant="h6" className="text-sm">
          Testar o Premium de graça
        </Typography>
        <Typography variant="body1" className="text-base">
          Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de
          cartão de crédito.
        </Typography>
      </div>
      <Button variant="default" size="lg">
        Inscreva-se grátis
      </Button>
    </footer>
  );
}
