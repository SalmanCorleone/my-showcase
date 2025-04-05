import theme from '@/utils/theme';

const Footer = () => {
  return (
    <footer
      className="flex flex-col items-center justify-center w-full h-24"
      style={{ backgroundColor: theme.palette.lightGrey }}
    >
      <p className="text-white text-sm">© 2022 Salman</p>
    </footer>
  );
};

export default Footer;
