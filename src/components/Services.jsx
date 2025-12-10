import ListComponent from "./ListComponent";
import services from '../assets/services (1).png';
import services1 from '../assets/services (2).png';

const data = [
     { imagePath: services, text: 'This is the first Service Offered' },
     { imagePath: services1, text: 'This is the second Service Offered' },
];

function Services(){
    return(
        <div>
            <h3>Services</h3>
            <ListComponent items={data}/>
        </div>
    );
}

export default Services;