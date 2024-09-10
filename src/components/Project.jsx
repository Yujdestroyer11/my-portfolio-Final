import Headline1 from "./Headline1";
import Headline2 from "./Headline2";
import projectInfo from "../Info";
import redtiger from "../../public/images/Redtiger.png"
import vapeguru from "../../public/images/Vapeguru.png"
import keeper from "../../public/images/Keeper.png"


export default function Projects() {
  return (
    <div class="container pt-5" id="projects">
            <h2 class="text-center pt-3 display-6 fw-bold text-body-emphasis">Some of my work</h2>
            <div>
              <Headline1 
              img={redtiger}
              name={projectInfo[0].projectName}
              description={projectInfo[0].description}
              href={projectInfo[0].href}
              tools={projectInfo[0].tools}
              />
              <Headline2 
              img={vapeguru}
              name={projectInfo[1].projectName}
              description={projectInfo[1].description}
              href={projectInfo[1].href}
              tools={projectInfo[1].tools}
              />
              <Headline1 
              img={keeper}
              name={projectInfo[2].projectName}
              description={projectInfo[2].description}
              href={projectInfo[2].href}
              tools={projectInfo[2].tools}
              />
            </div>
  </div>
  );
}
