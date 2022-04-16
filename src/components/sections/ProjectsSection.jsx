import { FaGithub, FaLink } from "react-icons/fa";
import { Projects } from "../../data/Projects";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import {
  ProjectDescription,
  ProjectImageContainer,
  SingleProject,
  SlantedCard,
  StyledProjectsSection,
  Tags,
} from "../styles/sections/ProjectsSection.styled";

export const ProjectsSection = () => {
  return (
    <>
      <StyledProjectsSection id="projects">
        <SectionHeading>
          <h1>Projects</h1>
          <p>These are some of my best projects</p>
        </SectionHeading>

        <div>
              <SingleProject>
                <ProjectImageContainer
                  href={"https://clone-netflix-with-bootstrap.netlify.app/"}
                  target="_blank"
                >
                  <img src={"https://s2.glbimg.com/im_lQF2n6bZkzQFp3PM-SE-HHKw=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/e/F/tlaQIWTRyKBPzDoqCoeQ/portuguese-brazil.jpg"} alt={"netflix-clone"} />
                  <SlantedCard />
                </ProjectImageContainer>
                <ProjectDescription>
                  <h1>Clone da Netflix com Bootstrap</h1>
                  <Tags>
                    
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Bootstrap</span>
                      
                  </Tags>
                  <p>Clone do site de streaming feito com framework Bootstrap</p>
                  <div>
                    <a href={"https://github.com/Danyel-GranzottiUFC/clone-netflix-bootstrap"} target="_blank" rel="noreferrer">
                      <FaGithub />
                      <span>Código Fonte</span>
                    </a>
                    <a
                      href={"https://clone-netflix-with-bootstrap.netlify.app/"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLink />
                      <span>Clone Bootstrap</span>
                    </a>
                  </div>
                </ProjectDescription>
              </SingleProject>
        </div>
      </StyledProjectsSection>
      <hr />
    </>
  );
};
