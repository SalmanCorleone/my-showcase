import theme from '@/utils/theme';
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
    title: 'gmail',
    icon: '/icons/gmail.png',
    href: 'mailto:samilsalman12@gmail.com',
  },
];

const Footer = () => {
  return (
    <footer
      className="flex flex-col items-center justify-center w-full py-6 gap-4"
      style={{ backgroundColor: theme.palette.lightGrey }}
    >
      <p className="text-sm">Find me on</p>
      <div className="flex flex-row justify-center gap-10 flex-wrap">
        {socials.map((item) => (
          <a key={item.title} href={item.href} target="_blank" rel="noreferrer">
            <div key={item.title}>
              <Image src={item.icon} width={24} height={24} alt={item.title} className="rounded" />
            </div>
          </a>
        ))}
      </div>

      <div className="">{/* <p className="text-sm">© Samil Salman, Made with ♥️ in 2025</p> */}</div>
    </footer>
  );
};

export default Footer;
