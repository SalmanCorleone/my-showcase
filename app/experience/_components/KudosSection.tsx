import Image from 'next/image';
import { motion } from 'motion/react';
import classNames from 'classnames';

type ImageDataType = {
  src: string;
  w: number;
  h: number;
  className?: string;
};

const imageData: ImageDataType[] = [
  {
    src: '/images/kudos/gerald_2.png',
    w: 1200,
    h: 1000,
  },
  {
    src: '/images/kudos/gerald_3.png',
    w: 500,
    h: 500,
  },
  {
    src: '/images/kudos/gerald_5.png',
    w: 1200,
    h: 1200,
    className: 'lg:row-span-2',
  },
  {
    src: '/images/kudos/gerald_4.png',
    w: 1200,
    h: 1200,
    className: 'lg:col-span-2 lg:row-span-2',
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
    className: 'lg:col-span-2',
  },

  {
    src: '/images/kudos/tackle_1.jpg',
    w: 400,
    h: 400,
  },
];

const KudosSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 py-6 px-6 relative rounded-xl bg-gray-700">
      {imageData.map((item) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          key={item.src}
          className={classNames('flex flex-col', item.className)}
        >
          <Image src={item.src} alt={item.src} width={item.w} height={item.h} className="rounded-2xl opacity-90" />
        </motion.div>
      ))}
    </div>
  );
};

export default KudosSection;
