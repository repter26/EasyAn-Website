import styles from "./WiringManagement.module.css"
import image from "../../assets/install-image.jpg";

function WiringManagement(){
    return(<>
    <div className = {styles.bg}>
    
    <div><h1 className = {styles.Title}>Best Wiring Management</h1>
            <p className = {styles.Description}>EasyAn specializes in meticulous wiring management, vital for any
              security setup. Our certified technicians use high-quality
              materials and innovative techniques to organize and conceal
              cables, ensuring a tidy and interference-free installation. With
              EasyAn, your wiring is handled with precision and expertise,
              enhancing system reliability.</p>

    
    </div>
    
    <img src = {image} className= {styles.img}/>       
    </div>
        
    </>)
}

export default WiringManagement;