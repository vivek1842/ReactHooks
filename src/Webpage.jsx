import { HashLink } from "react-router-hash-link";
import "./index.css";

const WebPage = () => {
  return (
    <>
      <nav>
        <HashLink to="#home">
          <li>Home</li>
        </HashLink>
        <HashLink to="#services">
          <li>Services</li>
        </HashLink>
        <HashLink to="#about-us">
          <li>About-Us</li>
        </HashLink>
        <HashLink to="#contact-us">
          <li>Contact-Us</li>
        </HashLink>
      </nav>

      <div style={{textAlign: 'center'}} id="home">
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere velit, laboriosam aut incidunt delectus beatae facilis non distinctio ut a error magni numquam iure obcaecati! Ut delectus voluptatem maxime consequatur.
        Ipsum accusantium, aut, asperiores voluptatum eligendi dolor obcaecati cupiditate rem, officiis quod et necessitatibus harum exercitationem error ea autem minima molestiae amet provident debitis non! Impedit quod delectus atque ex.
        Totam tempore sequi perspiciatis suscipit laborum iste molestiae architecto quae eveniet neque assumenda delectus qui aperiam quisquam non itaque placeat laudantium, molestias quibusdam voluptatum repudiandae, earum aliquam dolor. Fuga, optio!
        Aspernatur similique saepe eligendi magnam, illo fugit praesentium reiciendis tenetur, rerum ad unde possimus dignissimos, soluta iure ducimus. Laborum eius consequatur laudantium quos magni provident, porro iure dolores placeat blanditiis.
        Vero ipsa vitae sint accusamus eum ut. Aspernatur animi laudantium asperiores quis accusamus, delectus earum pariatur totam quod placeat ut tenetur? Pariatur, eveniet totam aut sint dicta fugiat accusantium beatae.
        Amet at quibusdam culpa sapiente ratione ipsum, placeat, soluta, expedita corporis dignissimos illum quis animi officiis dicta quia vel consequatur molestiae ex iusto enim molestias. Dolorem cumque nemo sit ipsam?
        Tenetur accusantium perspiciatis, alias cum dicta voluptate assumenda. Officia quam laborum maxime cum sint esse aliquid exercitationem recusandae eum, voluptates, tenetur expedita doloremque earum ex ullam nobis voluptas consequatur neque!</p>
      </div>
      <section style={{textAlign: 'center'}} id="services">
        <div class="container text-center">
          <h1 class="title">SERVICES</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <h4>Growth Marketing</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                tenetur ipsum alias consequatur animi, voluptatibus ea repellat
                quaerat earum. Eos error sapiente reiciendis tempora ex iure
                adipisci, aut consequatur aperiam!
              </p>
            </div>
            <div class="col-md-4 services">
              <h4>Online Branding</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                tenetur ipsum alias consequatur animi, voluptatibus ea repellat
                quaerat earum. Eos error sapiente reiciendis tempora ex iure
                adipisci, aut consequatur aperiam!
              </p>
            </div>
            <div class="col-md-4 services">
              <h4>Animated Ads</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                tenetur ipsum alias consequatur animi, voluptatibus ea repellat
                quaerat earum. Eos error sapiente reiciendis tempora ex iure
                adipisci, aut consequatur aperiam!
              </p>
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            All Services
          </button>
        </div>
      </section>
      <section style={{textAlign: 'center'}} id="about-us">
        <div class="container">
          <h1 class="title text-center">ABOUT US</h1>
          <div class="row">
            <div class="col-md-6 about-us">
              <p class="about-title">Why we're different</p>
              <ul style={{listStyle: 'none'}}>
                <li>Believe in doing business with hontesty</li>
                <li>Believe in doing business with hontesty</li>
                <li>Believe in doing business with hontesty</li>
                <li>Believe in doing business with hontesty</li>
                <li>Believe in doing business with hontesty</li>
                <li>Believe in doing business with hontesty</li>
                <li>Believe in doing business with hontesty</li>
              </ul>
            </div>
            <div class="col-md-6"></div>
          </div>
        </div>
      </section>
      <div style={{textAlign: 'center'}} id="contact-us">
        <h1>CONTACT US</h1>
      <p>FIND US ON SOCIAL MEDIA</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempore non odit officiis numquam itaque aliquam, nihil, pariatur ad, nulla doloremque deserunt aut officia aspernatur nobis hic aperiam impedit unde.</p>
      </div>
    </>
  );
};

export default WebPage;
