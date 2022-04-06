import { CTAButton } from "../styles/common/CTAButton.styled";
import {
  AboutContent,
  DarkCircle,
  GradientCircle,
  ImageContainer,
  StyledAboutSection,
  StyledEmoji,
  StyledHeading,
  StyledImage,
} from "../styles/sections/AboutSection.styled";

export const AboutSection = () => {
  return (
    <>
      <StyledAboutSection id="about">
        <ImageContainer>
          <StyledImage src="./images/profile-pic.jpg" alt="Danyel Granzotti" />
          <DarkCircle />
          <GradientCircle />
        </ImageContainer>
        <AboutContent>
          <StyledHeading>
            Olá <StyledEmoji>👋</StyledEmoji>
          </StyledHeading>
          <p>
            Me chamo Danyel Granzotti, sou desenvolvedor web, apaixonado por tecnologia e por programação. Curso o terceiro semestre de Engenharia de Computação na Universidade Federal do Ceará (UFC) - Quixadá. Atualmente trabalho como desenvolvedor web por hobbie e busco uma oportunidade de trabalho para ampliar meus conhecimentos e me tornar um profissional melhor. Adquiri experiência de trabalho antes de ingressar na UFC, onde desenvolvi habilidades interpessoais como comunicatividade, trabalho em equipe e organização.
          <p>
            Meu interesse é desenvolver soluções que facilitem o dia-a-dia de quem utiliza os sistemas em que trabalho. Além dissso, procuro sempre aprimorar e diversificar minhas habilidades e me aperfeiçoar como profissional.
          </p>
          <p>
          Lattes: <a href="http://lattes.cnpq.br/5332374832041038" target="_blank">http://lattes.cnpq.br/5332374832041038</a>  
          </p>          
          </p>
        </AboutContent>
      </StyledAboutSection>
      <hr />
    </>
  );
};
