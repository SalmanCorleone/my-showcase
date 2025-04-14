import Image from 'next/image';
import { motion } from 'motion/react';

type ImageDataType = {
  src: string;
  w: number;
  h: number;
  style?: React.CSSProperties;
  gridColumn?: React.CSSProperties['gridColumn'];
  gridRow?: React.CSSProperties['gridRow'];
};

const imageData: ImageDataType[] = [
  {
    src: '/images/kudos/gerald_2.png', //ola
    w: 1200,
    h: 1000,
  },
  {
    src: '/images/kudos/gerald_3.png', //nikos shakil
    w: 500,
    h: 500,
  },
  {
    src: '/images/kudos/gerald_5.png', // nikos update
    w: 1200,
    h: 1200,
    gridRow: 'span 2',
  },
  {
    src: '/images/kudos/gerald_4.png', //matias
    w: 1200,
    h: 1200,
    gridColumn: 'span 2',
    gridRow: 'span 2',
  },

  {
    src: '/images/kudos/tackle_2.jpg', // syam
    w: 500,
    h: 500,
  },

  {
    src: '/images/kudos/gerald_1.png', //bonader
    w: 2400,
    h: 2400,
    gridColumn: 'span 2',
  },

  {
    src: '/images/kudos/tackle_1.jpg', // hsn
    w: 400,
    h: 400,
  },
];

const KudosSection = () => {
  return (
    <div className="grid grid-cols-3 gap-4 lg:gap-8 py-6 px-6 relative rounded-xl bg-gray-700">
      {imageData.map((item, idx) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          key={item.src}
          className="flex flex-col"
          style={{
            alignItems: !!(idx % 2) ? 'end' : 'start',
            gridColumn: item.gridColumn ?? 'span 1',
            gridRow: item.gridRow ?? 'span 1',
          }}
        >
          <Image
            src={item.src}
            alt={item.src}
            width={item.w}
            height={item.h}
            className="rounded-2xl opacity-90"
            style={item.style}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default KudosSection;
