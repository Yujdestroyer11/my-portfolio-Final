import cssIcon from '../assets/css.svg'
import gitIcon from '../assets/git.svg'
import htmlIcon from '../assets/html.svg'
import reactIcon from '../assets/iconreact.svg'
import javascriptlIcon from '../assets/javascripticon.svg'
import nodeIcon from '../assets/nodeicon.svg'
import postgresIcon from '../assets/postgresicon.svg'
import restIcon from '../assets/rest.svg'

export default function Skills () {
    return (
        <div className="main-container-myskills">
          <h2 className="h2Align kanit fw-bold text-body-emphasis" id="skills">
            My Skills
          </h2>
          <div className="top-container">
            <div className="midSkill-container">
              <div className="stack-container rubik">
                <div>
                  <p>Javascript</p>
                 <img src={javascriptlIcon} alt="" /> 
                </div>
                <div>
                  <p>HTML</p>
                  <img src={htmlIcon} alt="" /> 
                </div>
                <div>
                  <p>CSS</p> 
                  <img src={cssIcon} alt="" /> 
                </div>
                <div>
                  <p>React.js</p>
                  <img src={reactIcon} alt="" /> 
                </div>
                <div>
                  <p>Node.js</p>
                  <img src={nodeIcon} alt="" /> 
                </div>
                <div>
                  <p>Postgres</p>
                  <img src={postgresIcon} alt="" /> 
                </div>
                <div>
                  <p>Rest API</p>
                  <img src={restIcon} alt="" /> 
                </div>
                <div>
                  <p>Git</p>
                  <img src={gitIcon} alt="" /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}