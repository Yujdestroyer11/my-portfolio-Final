import ContactInfo from "./Contactinfo";

export default function Contact() {
  return (
    <div className="main-container">
      <h2 className="h2Align kanit fw-bold text-body-emphasis" id="contact">
        Contact Me
      </h2>
      <div className="top-container">
        <div className="midContact-container rubik">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}