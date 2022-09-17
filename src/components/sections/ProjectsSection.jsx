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
          <h1>Projetos</h1>
          <p>Estes são alguns dos meus melhores projetos</p>
        </SectionHeading>

        <div>
          {Projects &&
            Projects.map((project, index) => (
              <SingleProject key={index}>
                <ProjectImageContainer
                  href={project.projectlink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={project.thumbnail} alt={project.title} />
                  <SlantedCard />
                </ProjectImageContainer>
                <ProjectDescription>
                  <h1>{project.title}</h1>
                  <Tags>
                    {project.tags &&
                      project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex}>{tag}</span>
                      ))}
                  </Tags>
                  <p>{project.paragraph}</p>
                  <div>
                    <a href={project.codelink} target="_blank" rel="noreferrer">
                      <FaGithub />
                      <span>Código Fonte</span>
                    </a>
                    <a
                      href={project.projectlink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLink />
                      <span>{project.projectlinkText}</span>
                    </a>
                  </div>
                </ProjectDescription>
              </SingleProject>
            ))}
        </div>
      </StyledProjectsSection>
      <hr />
    </>
  );
};
