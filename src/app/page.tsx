import { Card } from '@/ui/components/data-display/card/card';
import React from 'react';

export default function Home() {
  return (
    <div className="main-view rounded-lg p-10">
      <div className="flex">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
