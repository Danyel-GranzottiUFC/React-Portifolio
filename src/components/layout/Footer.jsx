import {
  CodedWith,
  FooterNav,
  SyledFooter,
} from "../styles/layout/Footer.styled";

export const Footer = () => {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return (
    <>
      <SyledFooter>
        <FooterNav>
          <a href="#about">Sobre</a>
          <a href="#services">Serviços</a>
          <a href="#contact">Contato</a>
        </FooterNav>
        <CodedWith>Coded with React and Styled Components</CodedWith>
        <div>
          &copy;{months[new Date().getMonth()]} {new Date().getFullYear()}
        </div>
      </SyledFooter>
    </>
  );
};
