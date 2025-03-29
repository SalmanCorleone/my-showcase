import GridContents from '@/components/GridContents';
import RiveLaptopGuy from '@/components/RiveLaptopGuy';
import ReactLenis from 'lenis/react';

export default function Home() {
  return (
    <ReactLenis root>
      <div className="">
        <RiveLaptopGuy />
        <GridContents />
      </div>
    </ReactLenis>
  );
}
