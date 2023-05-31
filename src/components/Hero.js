import BackgroundAnimation from './BackgroundAnimation'
import { StyledHero, HeroArticle } from './styles/Hero.styled'
import harshImg from '../assets/pareto-removebg-preview.png'
import profileImg from '../assets/profile.png'
import { BreakLine } from './styles/GlobalStyles'
import intro from '../assets/mj_elite_media_intro.mp4'
import placeholder from '../assets/placeholder.png'

function Hero() {
  return (
    <>
      <div className='video-container'>
        <video controls width='250' poster={placeholder}>
          <source src={intro} type='video/mp4'></source>
        </video>
      </div>
      <StyledHero>
        <HeroArticle>
          <h2>The Harsh Reality</h2>
          <div className='harsh-container'>
            <div className='harsh-para'>
              <p>
                Let's face it,{' '}
                <span className='underlined-text'>
                  marketing is the secret sauce that fuels 80% of a business's
                  success.
                </span>{' '}
                It doesn't matter if your product is out of this world or your
                service is next-level amazing; if you can't reach your target
                clients and customers, you're just shouting into the void. And
                trust me, your competitors who are leveraging digital marketing
                every day are already celebrating your struggles.
              </p>
            </div>
          </div>
        </HeroArticle>
        <div className='harsh-image'>
          <img src={harshImg} alt='Harsh Reality' />
        </div>
        <p className='last-line'>
          Fear not! I'm here to rescue you from the dark depths of marketing
          oblivion. Here's how I work my magic
        </p>
      </StyledHero>
      <BreakLine />
      <StyledHero>
        <HeroArticle>
          <h2>
            Hey there, <br /> Khalifa here.
          </h2>
          <p>
            The mastermind behind MJ Elite Media! I'm not your average digital
            marketing guru—I'm a{' '}
            <span>Fullstack Digital Marketing & SEO Specialist</span>, here to
            take your business to new heights and make your competitors tremble
            in their marketing boots. 🚀
          </p>
        </HeroArticle>
        <div className='harsh-image'>
          <img src={profileImg} alt='profile image' />
        </div>
        {/* <BackgroundAnimation /> */}
      </StyledHero>
    </>
  )
}

export default Hero
