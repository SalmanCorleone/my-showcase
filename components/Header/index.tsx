const Header = () => {
  return (
    <div className="flex items-center justify-between py-8 px-4 sm:px-20">
      <h1 className="text-4xl font-bold">Samil's Blog</h1>
      <div className="flex gap-8">
        <a href="/articles" target="_blank" rel="noreferrer">
          Articles
        </a>
        <a href="https://github.com/SalmanCorleone" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="" target="_blank" rel="noreferrer">
          Contact
        </a>

        <a href="" target="_blank" rel="noreferrer">
          More about me
        </a>
      </div>
    </div>
  );
};

export default Header;
