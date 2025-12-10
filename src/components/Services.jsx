import ListComponent from "./ListComponent";
import services from '../assets/services (1).png';
import services1 from '../assets/services (2).png';

const data = [
  { 
    imagePath: services, 
    text: "I provide modern and responsive web development services using the latest technologies. Whether it's creating a personal portfolio, a business website, or a full-stack application, I focus on delivering clean design, high performance, and user-friendly interfaces."
  },

  { 
    imagePath: services1, 
    text: "I build reliable and scalable software solutions tailored to client needs. This includes backend development, API creation, problem-solving, and implementing efficient algorithms to ensure seamless and optimized application performance."
  }
];

function Services(){
    return(
        <div className="services-container">
            <h3>Services</h3>
            <ListComponent items={data}/>
        </div>
    );
}

export default Services;
