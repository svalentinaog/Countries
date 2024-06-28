import "../styles/Contact.css";
import BaseLayout from "../components/BaseLayout";

export default function ContactPage() {
  return (
    <BaseLayout>
      <div className="container-Contact">
        <div className="container-contactInfo contactInfo">
          <h1 className="text-contactMe">Contact</h1>
          <p>Do not hesitate to contact me, I will be happy to help you.</p>
        </div>

        <div className="container-dataContact">
          <div className="container-contactMe">
            <div className="cardContact">
              <img
                src="/images/direccion.png"
                alt="Welcome"
                className="contactMe-image"
              />
              <p>Cl 20B #47 A Sur 24</p>
            </div>

            <div className="cardContact">
              <img
                src="/images/telefono.png"
                alt="Welcome"
                className="contactMe-image"
              />
              <p>+57 318 739 9367</p>
            </div>

            <div className="cardContact">
              <img
                src="/images/correo-electronico.png"
                alt="Welcome"
                className="contactMe-image"
              />
              <p>svalentinaog@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
