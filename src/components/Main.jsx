
import vedioBg1 from '../Assests/VedioBg1.mp4';
import '../index.css';
import Navbar from './Navbar';


const Main=()=>{
return (
    <div className='main'>
       
        <video src={vedioBg1} autoPlay loop muted ><h1> Hello Everone</h1></video>
        

    </div>
)
}
export default Main;