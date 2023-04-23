import React from "react";
import "./about.css";
import ME from "../../assets/yogi_Half2.jpg";
import { FiAward } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>Aboute Me</h2>

      <div className="container  about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>Still counting</small>
            </article>
            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>Project</h5>
              <small>5 Completed </small>
            </article>
            <article className="about__card" id="hobbies">
              <a
                href="https://instagram.com/kalpana_lokadalli?igshid=ZDdkNTZiNTM="
                target="_blank"
              >
                <FiInstagram className="about__icon" />
              </a>
              <h5>Hobbies</h5>
              <h6>Writting kannada Poems</h6>
            </article>
          </div>
          <p>
            Me Yogesh Magadum  a  engineering graduate with a passion for
            software development feild and passionate to learn and grow as a software
            engineer.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
