import { styled } from 'styled-components'
import { BoxParagraph, SubtitlesSection, TitleSection } from '../utils/Atoms'
import aboutImg from '../../assets/coach5.jpg'
import colors from '../utils/colors'
import Adsense from '../Adsense'

const AboutContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1.2rem;
    padding: 5rem;
    padding-bottom: 0;
    background-color: ${colors.primary};

    @media screen and (max-width:875px) {
        flex-direction: column;
        padding: 5rem 1.2rem 0 1.2rem;
    }
`

const LeftAbout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

const RightAbout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImgAbout = styled.img`
    width: 30vw;
    height: 30vw;
    max-width: 400px;
    border-radius: 8px;
    margin-bottom: 20px;

    @media screen and (max-width:875px) {
        width: 20rem;
        height:auto;
        margin-top: 1.5rem;
    }    
`

const About = () => {
  return (
    <AboutContainer id='about'>
      <div className="container-class-name">
        <Adsense style={{ display: "block", width: "auto", height: "auto" }} slot="6098838326" />
      </div>
      {/* Left side */}
      <LeftAbout>
        <SubtitlesSection style={{ textAlign: 'left' }}>About me</SubtitlesSection>
        <TitleSection style={{ textAlign: 'left' }}>About Us</TitleSection>
        <BoxParagraph style={{ textAlign: 'left' }}>
          <p>Welcome to the Palace Football Academy, located in the bustling city of Akure, within the vibrant Township Stadium in Ondo State, Nigeria. We are a premier football academy committed to nurturing young talents and molding them into exceptional football players, both on and off the pitch.</p>
          <p>At the Palace Football Academy, our mission is to develop a new generation of skilled and disciplined young individuals, who will excel in the sport of football while maintaining strong character and integrity. We aim to provide a comprehensive football education that fosters growth, both athletically and academically, resulting in well-rounded individuals who can contribute positively to society.</p>
          <p>Our vision is to become a pacesetter in football development in Nigeria. We aspire to identify and nurture promising football talents from a young age, providing them with world-class coaching, top-notch facilities, and a supportive environment to unleash their full potential. Through our rigorous training programs and mentoring, we aim to produce athletes who can compete at national and international levels, while also creating pathways for professional football careers.</p>
          <p>Our state-of-the-art facilities at the Township Stadium in Akure are specifically designed to cater to the needs of aspiring footballers. From well-maintained pitches to modern training equipment, we ensure that our academy provides an optimal environment for skill enhancement and tactical development. Additionally, our team of highly qualified coaches possesses vast experience in elite football and is dedicated to instilling proper technique, discipline, teamwork, and sportsmanship in our students.</p>
          <p>We believe in a holistic approach to football development, which is why our academy places equal emphasis on academics and personal development. We understand that education is invaluable, and therefore we offer a structured educational program that runs parallel to our football training. Our students receive quality education from experienced teachers, allowing them to strike a balance between their athletic and academic aspirations.</p>
          <p>It is our firm belief that through hard work, determination, and discipline, every child can achieve greatness. We strive to provide equal opportunities for aspiring footballers, regardless of their background or socioeconomic status. Our academy is built on a foundation of inclusivity, promoting diversity and creating a supportive community for every player.</p>
          <p>Come and join us at the Palace Football Academy, where dreams become reality. We are committed to empowering the next generation of Nigerian football stars and shaping their futures. Together, let us embark on an inspiring journey towards success in the beautiful game of football.</p>
        </BoxParagraph>

      </LeftAbout>
      {/* Right side */}
      <RightAbout>
        <ImgAbout src={aboutImg} alt="about-img" />
      </RightAbout>
    </AboutContainer>
  )
}

export default About