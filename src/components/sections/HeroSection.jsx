import { CTAButton } from "../styles/common/CTAButton.styled";
import {
  HeroContent,
  HeroSocialIcons,
  StyledArrowDown,
  StyledHeroSection,
  SocialIcon,
} from "../styles/sections/HeroSection.styled";
import { FaArrowDown, FaGithub, FaTwitter, FaYoutube,FaLinkedinIn } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <StyledHeroSection id="hero-section">
      <HeroContent>
        <h1>Danyel Granzotti</h1>
        <h3>{"{Desenvolvedor Web}"}</h3>
        <p>HTML5 . CSS3 . JavaScript . React . Next.js. Bootstrap. Vue</p>
        <div>
          <CTAButton href="#contact" primary margin="0 0 0 20px">
            Me contrate!
          </CTAButton>
        </div>
      </HeroContent>
      <StyledArrowDown href="#about">
        <FaArrowDown />
      </StyledArrowDown>
      <HeroSocialIcons>
  
        <SocialIcon href="https://github.com/DanyelGranzotti" target="_blank">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/danyel-granzotti" target="_blank">
          <FaLinkedinIn />
        </SocialIcon>
      </HeroSocialIcons>
    </StyledHeroSection>
  );
};
