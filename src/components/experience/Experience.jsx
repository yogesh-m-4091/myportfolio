import React from "react";
import "./experience.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container  experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermidiate </small>
              </div>
            </article>

            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermidiate </small>
              </div>
            </article>

            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details_icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermidiate </small>
              </div>
            </article>

            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details_icon" />
              <div>
                <h4>React-js</h4>
                <small className="text-light">Intermidiate </small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details_icon" />
              <div>
                <h4>Core Java</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details_icon" />
              <div>
                <h4>JDBC Sevlet</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details_icon" />
              <div>
                <h4>Oracle SQL</h4>
                <small className="text-light">Intermidiate </small>
              </div>
            </article>

            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details_icon" />
              <div>
                <h4>My SQL</h4>
                <small className="text-light">Intermidiate </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
