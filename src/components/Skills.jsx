import cssIcon from '../assets/css.svg'
import bootstrapIcon from '../assets/bootstrap.svg'
import htmlIcon from '../assets/html.svg'
import reactIcon from '../assets/iconreact.svg'
import javascriptlIcon from '../assets/javascripticon.svg'
import nodeIcon from '../assets/nodeicon.svg'
import postgresIcon from '../assets/postgresicon.svg'
import restIcon from '../assets/rest.svg'

const imgStyle = {
  height: "50px",
  width: "50%",
}

export default function Skills() {
    return (
      <div class="container text-center pt-5" id="skills">
      <h1 class="pt-3 display-6 fw-bold text-body-emphasis">My Skills</h1>
      <div class="row row-cols-3">
          <div class="col-sm-3 py-2">
              <p>HTML</p>
              <img class="hover-image" src={htmlIcon} alt="" srcset="" style={imgStyle}/>
          </div>
          <div class="col-sm-3 py-2">
              <p>CSS</p>
              <img class="hover-image" src={cssIcon} alt="" srcset="" style={imgStyle}/>
          </div>
          <div class="col-sm-3 py-2">
              <p>Javascript</p>
              <img class="hover-image" src={javascriptlIcon} alt="" srcset="" style={imgStyle}/>
          </div>
          <div class="col-sm-3 py-2">
              <p>Bootstrap</p>
              <img class="hover-image" src={bootstrapIcon} alt="" srcset="" style={imgStyle}/>
          </div>
          <div class="col-sm-3 py-2">
              <p>React</p>
              <img class="hover-image" src={reactIcon} alt="" srcset="" style={imgStyle}/>
          </div>
          <div class="col-sm-3 py-2">
              <p>Node</p>
              <img class="hover-image" src={nodeIcon} alt="" srcset="" style={imgStyle}/>
          </div>
          <div class="col-sm-3 py-2">
              <p>Postgres</p>
              <img class="hover-image" src={postgresIcon} alt="" srcset="" style={imgStyle}/>
          </div>
          <div class="col-sm-3 py-2">
              <p>REST API</p>
              <img class="hover-image" src={restIcon} alt="" srcset="" style={imgStyle}/>
          </div>
      </div>
  </div>
      );
}