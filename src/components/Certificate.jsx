import certificateImage from "../../public/images/Certificate.jpg"

export default function Certificate() {
    return (
      <div className="main-container">
        <h2 className="h2Align kanit fw-bold text-body-emphasis">
          My Udemy Certificate
        </h2>
        <div className="top-container">
          <div className="midCertificate-container rubik">
            <img src={certificateImage} />
          </div>
        </div>
      </div>
    );
  }
