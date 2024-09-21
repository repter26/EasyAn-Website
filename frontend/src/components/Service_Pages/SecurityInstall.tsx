import styles from "./SecurityInstall.module.css"
import image from "../../assets/install-image.jpg";

function SecurityInstall(){
    return(<>
    <div className = {styles.bg}>
    
    <div><h1 className = {styles.Title}>Best Secuirty Camera Install</h1>
            <p className = {styles.Description}>At EasyAn, our certified professionals deliver top-tier security
              camera installations. We use the latest surveillance technology
              and conduct thorough site assessments to ensure optimal camera
              placement and crystal-clear video quality. Count on EasyAn for
              reliable, expertly tailored security camera solutions that keep
              your property safe.</p>

    
    </div>
    
    <img src = {image} className= {styles.img}/>       
    </div>
        
    </>)
}

export default SecurityInstall;