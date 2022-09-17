import { CTAButton } from "../styles/common/CTAButton.styled";
import { PDFButton } from "../styles/common/PDFButton.styled";
import {
  HeroContent,
  HeroSocialIcons,
  StyledArrowDown,
  StyledHeroSection,
  SocialIcon,
} from "../styles/sections/HeroSection.styled";
import { FaArrowDown, FaGithub, FaFilePdf, FaLinkedinIn } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <StyledHeroSection id="hero-section">
      <HeroContent>
        <h1>Danyel Granzotti</h1>
        <h3>{"{Desenvolvedor Web}"}</h3>
        <p>
          HTML5 . CSS3 . JavaScript . TypeScript . React . Angular . Bootstrap,
          Spring Boot, Node.js
        </p>
        <div>
          <CTAButton href="#contact" primary margin="0 0 0 20px">
            Me contrate!
          </CTAButton>
        </div>
        <div>
          <PDFButton
            href="https://drive.google.com/file/d/1egRjtzinbPCQpd7ZVm6NnAu8hqlZTVUB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            primary
            margin="0 0 0 20px"
          >
            <FaFilePdf />
          </PDFButton>
        </div>
      </HeroContent>
      <StyledArrowDown href="#about">
        <FaArrowDown />
      </StyledArrowDown>
      <HeroSocialIcons>
        <SocialIcon href="https://github.com/DanyelGranzotti" target="_blank">
          <FaGithub />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/danyel-granzotti"
          target="_blank"
        >
          <FaLinkedinIn />
        </SocialIcon>
      </HeroSocialIcons>
    </StyledHeroSection>
  );
};
