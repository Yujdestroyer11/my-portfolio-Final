
export default function Card(props) {
    return (
      <div className="card-entry rubik">
        <h3>{props.projectName}</h3>
        <dl>
          <dt>Description:</dt>
          <dd>{props.description}</dd>
          <dt>Tools used:</dt>
          <dd>{props.tools}</dd>
        </dl>
        <div className="wrapper">
          <div className="image-x">
            <img src={props.img} />
  
            <div className="content">
              <a href={props.href}>
                <h1 className="kanit">{props.effect}</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }