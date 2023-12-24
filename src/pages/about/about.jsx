import Header from "../../components/Header"

import HeaderImage from "../../images/header_bg_1.jpg"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"
import "./about.css"



const about = () => {
  return (
    <>
     <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolore
       voluptatum esse illo officiis veritatis libero qui officia. Aspernatur, odit!
     </Header>

     <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Magni dolores, explicabo corporis culpa error rerum pariatur 
             excepturi eligendi placeat nesciunt temporibus nam repudiandae optio 
             incidunt reprehenderit repellendus, sunt doloribus

          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit ex, 
            non repellendus dolore placeat doloremque accusantium, aperiam corporis dignissimos voluptatem!
             Voluptatum quae perferendis dignissimos similique architecto, vitae quos fugit.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit facilis maxime? Lorem, ipsum dolor.
          </p>
        </div>
      </div>
     </section>

     <section className="about__vision">
      <div className="container about__vision-container">
        
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Magni dolores, explicabo corporis culpa error rerum pariatur 
             excepturi eligendi placeat nesciunt temporibus nam repudiandae optio 
             incidunt reprehenderit repellendus

          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit ex, 
            non repellendus dolore placeat doloremque accusantium, aperiam corporis dignissimos voluptatem!
          </p>
        </div>
        <div className="vision__section-image">
          <img src={VisionImage} alt="" />
        </div>
      </div>
     </section>


     <section className="about__mission">
      <div className="container about__mission-container">
        <div className="mission__section-image">
          <img src={MissionImage} alt="" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Magni dolores, explicabo corporis culpa error rerum pariatur 
             excepturi eligendi placeat nesciunt temporibus nam repudiandae

          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit ex, 
            non repellendus dolore placeat doloremque accusantium, aperiam corporis dignissimos voluptatem!
            
          </p>

          
        </div>
      </div>
     </section>
     </>
  
  )
}

export default about