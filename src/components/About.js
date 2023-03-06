import aboutImg from "../images/about.jpeg";
import Title from "./Title";
const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            As the leading marketplace for travel experiences, we believe that
            making memories is what travel is all about.
          </p>
          <p>
            Everything from simple tours to extreme adventures (and all the
            niche, interesting stuff in between)—making memories that will last
            a lifetime has never been easier.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
