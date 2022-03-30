import {
  BannerSection,
  StyledTopBanner,
} from "../styles/layout/TopBanner.styled";

export const TopBanner = () => {
  return (
    <>
      <StyledTopBanner>
        <BannerSection showOnMobile>
          <a href="mailto:danyelgranzotti@alu.ufc.br">danyelgranzotti@alu.ufc.br</a>
        </BannerSection>
        <BannerSection>⚡ Disponível para Contratação</BannerSection>
      </StyledTopBanner>
    </>
  );
};
