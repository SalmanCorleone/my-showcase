import Image from 'next/image';

const About = () => {
  return (
    <div className="flex flex-col lg:h-screen items-center justify-center lg:px-72 px-4">
      <section className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-4 lg:gap-6 py-4 border">
        <div className="flex justify-center col-span-1 row-span-1 lg:col-start-2">
          <div className="w-48 h-48 object-cover overflow-hidden relative rounded-3xl">
            <Image
              src={'/images/me.jpg'}
              width={192}
              height={192}
              className="origin-center object-cover w-full h-full"
              alt="me"
            />
          </div>
        </div>

        <div className="hidden lg:block col-span-1 row-span-1" />

        <div className="col-span-1 row-span-3 border">
          <p>I had my Bachelor degree in Computer Science from Bangladesh University of Engineering and Technology</p>
        </div>
        <div className="col-span-1 row-span-1 border">I'm Samil Salman</div>
        <div className="col-span-1 row-span-1 border">Leetcoding maybe</div>

        <div className="col-span-1 row-span-1 border">
          <p>I try and play some music</p>
        </div>

        <div className="col-span-1 row-span-1 border">
          <p>Movie buff, here's my imdb and letterboxd</p>
        </div>

        <div className="col-span-1 row-span-1 border">
          <p>Big into gaming, I play FPS mostly. Elden ring has been my favourite game so far</p>
        </div>

        <div className="col-span-1 row-span-1 border">
          <p>I do edit videos, as a hobby Adobe premiere and After effects</p>
        </div>
        <div className="col-span-1 row-span-1 border">
          <p>Not to brag but I'm somewhat of a chef myself. I love spicy foods</p>
        </div>
      </section>
    </div>
  );
};

export default About;
