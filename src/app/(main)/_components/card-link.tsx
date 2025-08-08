'use client';
import Link from 'next/link';
import React from 'react';

type CardLinkProps = React.ComponentProps<typeof Link>;

export function CardLink(props: CardLinkProps) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.stopPropagation();
  }

  return <Link {...props} onClick={handleClick} />;
}
