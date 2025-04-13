import Image from 'next/image';
import theme from '@/utils/theme';
import CircleIcon from '@/components/CircleIcon';
import LinkButton from '@/components/LinkButton';

const movieLinkMap: Record<string, string> = {
  imdb: 'https://www.imdb.com/user/ur53688954',
  letterboxd: 'https://letterboxd.com/salmansantino/',
  medium: 'https://medium.com/@salmansantino',
};

const musicLinkMap: Record<string, string> = {
  soundcloud: 'https://soundcloud.com/salmansantino',
};

const productHuntLinkMap: Record<string, string> = {
  'Launch page': 'https://www.producthunt.com/products/2021-your-year-in-meetings',
  'Blog about our journey': 'https://medium.com/@syam_33908/our-first-foray-into-product-hunt-31e0b82f55b3',
};

const About = () => {
  return (
    <div className="flex flex-col lg:min-h-screen items-center justify-center lg:px-72 px-4 py-4 lg:py-8">
      <section className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-6 lg:gap-6 py-4 text-center">
        <div className="flex justify-center col-span-1 row-span-1 lg:col-start-2">
          <div className="w-48 h-48 overflow-hidden relative rounded-3xl">
            <Image
              src={'/images/me.jpg'}
              width={1000}
              height={1000}
              className="origin-center object-cover w-full h-full"
              alt="samil"
            />
          </div>
        </div>

        <div className="hidden lg:block col-span-1 row-span-1" />

        <div className="col-span-1 row-span-2 gridBoxAboutPage">
          <CircleIcon bg={theme.palette.lightGrey} icon={<span>📚</span>} />
          <p>I had my Bachelor degree in Computer Science from Bangladesh University of Engineering and Technology</p>
        </div>
        <div className="col-span-1 row-span-1 gridBoxAboutPage">
          <CircleIcon bg={theme.palette.lightGrey} icon={<span>😇</span>} />
          I&apos;m Samil Salman (pronounced sʌmɪl)
        </div>

        <div className="col-span-1 row-span-2 gridBoxAboutPage">
          <CircleIcon bg={theme.palette.orange} icon={<span>P</span>} />
          <p>
            We did a fun project called &apos;2021 Your Year In Meetings&apos; which was nominated as the semi-finalist
            at Product Hunt on Productivity category of 2021
          </p>
          {Object.keys(productHuntLinkMap).map((key) => (
            <LinkButton href={productHuntLinkMap[key]} title={key} key={key} />
          ))}
        </div>
        <div className="col-span-1 row-span-1 gridBoxAboutPage">
          <CircleIcon bg={theme.palette.lightYellow} icon={<span>🎸</span>} />
          <p>I try and play some music sometimes</p>
          {Object.keys(musicLinkMap).map((key) => (
            <LinkButton href={musicLinkMap[key]} title={key} key={key} />
          ))}
        </div>

        <div className="col-span-1 row-span-1 gridBoxAboutPage">
          <CircleIcon bg={theme.palette.lightGrey} icon={<span>🎭</span>} />
          <p>Movie buff. Current recommendation: All Quiet on the Western Front (2022)</p>
          <div className="flex flex-wrap gap-4">
            {Object.keys(movieLinkMap).map((key) => (
              <LinkButton href={movieLinkMap[key]} title={key} key={key} />
            ))}
          </div>
        </div>

        <div className="col-span-1 row-span-1 gridBoxAboutPage">
          <CircleIcon bg={theme.palette.lightGrey} icon={<span>🎥</span>} />
          <p>I do edit videos, as a hobby Adobe premiere and After effects</p>
        </div>

        <div className="col-span-1 row-span-1 gridBoxAboutPage">
          <CircleIcon bg={theme.palette.lightYellow} icon={<span>🎮</span>} />
          <p>Big into gaming, I play FPS mostly. Elden ring has been my favorite game so far</p>
        </div>
        <div className="col-span-1 row-span-1 gridBoxAboutPage">
          <div className="w-12 h-12 overflow-hidden rounded-full">
            <Image
              src={'/images/scientist.jpg'}
              width={200}
              height={200}
              className="origin-center object-cover w-full h-full"
              alt="samil"
            />
          </div>
          <p>Not to brag but I&apos;m something of a chef myself.</p>
        </div>

        <div className="col-span-1 row-span-1 gridBoxAboutPage">
          <CircleIcon
            bg={theme.palette.lightGrey}
            icon={<Image src={'/images/duolingo.png'} width={200} height={200} alt="duolingo" />}
          />
          <p>I&apos;m fluent in English and Bangla. Thanks to Duolingo, know a bit of spanish too. </p>
        </div>
      </section>
    </div>
  );
};

export default About;
