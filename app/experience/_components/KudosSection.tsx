import Image from 'next/image';

type ImageDataType = {
  src: string;
  w: number;
  h: number;
  style?: React.CSSProperties;
  gridColumn?: React.CSSProperties['gridColumn'];
};

const imageData: ImageDataType[] = [
  {
    src: '/images/kudos/tackle_1.jpg',
    w: 400,
    h: 400,
    style: {
      transform: 'rotate(-10deg)',
    },
  },
  {
    src: '/images/kudos/tackle_2.jpg',
    w: 500,
    h: 500,
  },
  {
    src: '/images/kudos/gerald_1.png',
    w: 2400,
    h: 2400,
    gridColumn: 'span 2',
    style: {
      transform: 'rotate(10deg)',
    },
  },
  {
    src: '/images/kudos/gerald_2.png',
    w: 1200,
    h: 1000,
    style: {
      transform: 'rotate(-10deg)',
    },
  },
  {
    src: '/images/kudos/gerald_3.png',
    w: 500,
    h: 500,
  },
  {
    src: '/images/kudos/gerald_4.png',
    w: 500,
    h: 500,
    style: {
      transform: 'rotate(10deg)',
    },
  },
  {
    src: '/images/kudos/gerald_5.png',
    w: 1200,
    h: 1200,
    style: {
      transform: '',
    },
  },
];

const KudosSection = () => {
  return (
    <div className="border grid grid-cols-3 gap-4 lg:gap-8 py-6 px-6 relative">
      {imageData.map((item, idx) => (
        <div
          key={item.src}
          className="border flex flex-col"
          style={{ alignItems: !!(idx % 2) ? 'end' : 'start', gridColumn: item.gridColumn ?? 'span 1' }}
        >
          <Image
            src={item.src}
            alt={item.src}
            width={item.w}
            height={item.h}
            className="rounded-xl"
            style={item.style}
          />
        </div>
      ))}
    </div>
  );
};

export default KudosSection;
