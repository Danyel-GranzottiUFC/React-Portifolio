import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import {
  ContactInfo,
  DetailsWrapper,
  ImageWrapper,
  StyledContactSection,
} from "../styles/sections/ContactSection.styled";

export const ContactSection = () => {
  return (
    <>
      <StyledContactSection id="contact">
        <SectionHeading>
          <h1>Contato</h1>
          <p>Entre em contato</p>
        </SectionHeading>
        <DetailsWrapper>
          <ContactInfo>
            <p>
              Adoraria se me contactassem. Mesmo que seja só para dizer "Oi!".
            </p>
            <div>
              <a href="mailto:danyelgranzotti@alu.ufc.br">
                <FaEnvelope /> <span>danyelgranzotti@alu.ufc.br</span>
              </a>

              <a href="tel:+5589994019784">
                <FaWhatsapp /> <span>(89)99401-9784</span>
              </a>
            </div>
          </ContactInfo>
          <ImageWrapper>
            <img src="./images/chat.svg" alt="contact" />
          </ImageWrapper>
        </DetailsWrapper>
      </StyledContactSection>
      <hr />
    </>
  );
};
