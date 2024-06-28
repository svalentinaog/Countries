import "../styles/AboutPage.css";
import BaseLayout from "../components/BaseLayout";

export default function AboutPage() {
  return (
    <BaseLayout>
      <div className="container-AboutPage">
        <div className="container-introduction introduction">
          <h1>Welcome to our CountriesApp!</h1>
          <p>
            This application is designed to provide you with detailed
            information about the countries.
          </p>
        </div>

        <div className="container-dataBlocks">
          <div className="container-aboutMe">
            <div className="aboutMe-imgSpace">
              <img
                src="/images/ME.jpg"
                alt="Welcome"
                className="aboutMe-image"
              />
            </div>
            <div className="text-aboutMe">
              <h1>Founder</h1>
              <p>
                Hi, Im Valentina Ortiz, student of the SoyHenry bootcamp. Its
                a pleasure to share with you this Countries App that I have
                developed. Throughout my training at Henry, I have gained
                experience in several essential web development technologies,
                including HTML5, CSS3, React, Redux Toolkit, Sequelize and
                PostgreSQL. These tools have allowed me to create this app,
                providing an intuitive and easy-to-use experience for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
