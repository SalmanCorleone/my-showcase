import Image from 'next/image';

const socials = [
  {
    title: 'LinkedIn',
    icon: '/icons/linkedin.png',
    href: 'https://www.linkedin.com/in/samil-salman21',
  },
  {
    title: 'Github',
    icon: '/icons/github.png',
    href: 'https://github.com/SalmanCorleone',
  },
  {
    title: 'LeetCode',
    icon: '/icons/leetcode.webp',
    href: 'https://leetcode.com/u/samilsalman12/',
  },
  {
    title: 'Gmail',
    icon: '/icons/gmail.png',
    href: 'mailto:samilsalman12@gmail.com',
  },
];

const Footer = () => {
  return (
    <footer className="flex place-content-center">
      <div className="flex flex-col items-center justify-center py-6 px-10 gap-4 bg-gray-500 w-full">
        <p className="text-sm font-medium text-light">Find me on</p>
        <div className="flex flex-row justify-center gap-10 flex-wrap">
          {socials.map((item) => (
            <a key={item.title} href={item.href} target="_blank" rel="noreferrer">
              <div key={item.title} className="shadow p-2 rounded-3xl bg-[var(--light)]">
                <Image src={item.icon} width={24} height={24} alt={item.title} className="rounded" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
