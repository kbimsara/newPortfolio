'use client';

import dynamic from 'next/dynamic';

const SpaceStation = dynamic(() => import('./SpaceStation'), { ssr: false });

export default function SpaceStationWrapper() {
  return <SpaceStation />;
}
