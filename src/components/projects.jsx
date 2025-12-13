import ListComponent from "./ListComponent";
import bankingapp from '../assets/bankingApp.png';
import smartHotelmanagment from '../assets/smartHotelManagment.png';
import linuxproject from '../assets/linuxproject.png';

const data = [
     { 
          imagePath: bankingapp, 
          title: 'Banking App',
          text: 'I built a C# console-based Banking Application that simulates real-world account operations such as deposits, withdrawals, authentication, and transaction logging.'
     },
     { 
          imagePath: smartHotelmanagment, 
          title: 'Smart Hotel Management', 
          text: 'QuickStay is a hotel management system we designed using software engineering principles like CRC modeling and workflows.'
     },
     { 
          imagePath: linuxproject, 
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
