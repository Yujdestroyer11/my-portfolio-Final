import Card from "./Card";
import projectInfo from "../Info";

export default function Projects() {
  return (
    <div className="main-container" id="projects">
      <h2 className="h2Align kanit fw-bold text-body-emphasis">My Projects</h2>
      <div className="top-container">
        <div className="midProjects-container">
          <div className="projects-container">
            <div>
              <Card
                projectName={projectInfo[0].projectName}
                tools={projectInfo[0].tools}
                img={projectInfo[0].imgURL}
                href={projectInfo[0].href}
                description={projectInfo[0].description}
                effect={projectInfo[0].effect}
              />
            </div>
            <div>
              <Card
                projectName={projectInfo[1].projectName}
                tools={projectInfo[1].tools}
                img={projectInfo[1].imgURL}
                href={projectInfo[1].href}
                description={projectInfo[1].description}
                effect={projectInfo[1].effect}
              />
            </div>
            <div>
              <Card
                projectName={projectInfo[2].projectName}
                tools={projectInfo[2].tools}
                img={projectInfo[2].imgURL}
                href={projectInfo[2].href}
                description={projectInfo[2].description}
                effect={projectInfo[2].effect}
              />
            </div>
            <div>
              <Card
                projectName={projectInfo[3].projectName}
                tools={projectInfo[3].tools}
                img={projectInfo[3].imgURL}
                href={projectInfo[3].href}
                description={projectInfo[3].description}
                effect={projectInfo[3].effect}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
