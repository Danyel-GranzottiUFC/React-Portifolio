import { FaCode, FaLaptopCode, FaGit, FaLanguage } from "react-icons/fa";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import {
  IconWrapper,
  ServicesItems,
  SingleService,
  StyledServicesSection,
} from "../styles/sections/ServicesSection.styled";

export const ServicesSection = () => {
  return (
    <>
      <StyledServicesSection id="services">
        <SectionHeading>
          <h1>Serviços</h1>
          <p>Animado para trabalhar com vocês!</p>
        </SectionHeading>
        <ServicesItems>
          <SingleService>
            <IconWrapper>
              <FaCode />
            </IconWrapper>
            <h1>Desenvolvimento Web</h1>
            <p>
              Desenvolvi aplicações web completas usando HTML, CSS e JavaScript.
            </p>
          </SingleService>
          <SingleService>
            <IconWrapper>
              <FaLaptopCode />
            </IconWrapper>
            <h1>Design para HTML</h1>
            <p>
              Converto designs existentes em sites HTML/CSS de forma perfeita.
            </p>
          </SingleService>
          <SingleService>
            <IconWrapper>
              <FaGit />
            </IconWrapper>
            <h1>Versionamento de Código</h1>
            <p>Trabalho com git, github, bitbucket, entre outros.</p>
          </SingleService>
          <SingleService>
            <IconWrapper>
              <FaLanguage />
            </IconWrapper>
            <h1>Bom Listening e Reading</h1>
            <p>
              Compreendo com facilidade textos e falas em inglês. Além de
              conseguir me comunicar.
            </p>
          </SingleService>
        </ServicesItems>
      </StyledServicesSection>
      <hr />
    </>
  );
};
