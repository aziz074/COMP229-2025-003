import ListComponent from "./ListComponent";
import bankingApp from '../assets/bankingApp.png';
import smartHotelManagment from '../assets/smartHotelManagment.png';
import linuxProject from '../assets/linuxProject.png';

const data = [
     { 
          imagePath: bankingApp, 
          title: 'Banking App',
          text: 'I built a C# console-based Banking Application that simulates real-world account operations such as deposits, withdrawals, authentication, and transaction logging.'
     },
     { 
          imagePath: smartHotelManagment, 
          title: 'Smart Hotel Management', 
          text: 'QuickStay is a hotel management system we designed using software engineering principles like CRC modeling and workflows.'
     },
     { 
          imagePath: linuxProject, 
          title: 'Linux Project', 
          text: 'I set up and managed a Linux virtual machine using SSH for secure remote access and system administration.'
     }
];

function Projects(){
    return(
        <div>
            <h3>Projects</h3>
            <ListComponent items={data}/>
        </div>
    );
}

export default Projects;
