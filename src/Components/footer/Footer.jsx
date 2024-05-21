import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";


const Footer = () => {


const handleIcon=(platform)=>{
    if(platform==="Portfolio")
    {
        window.open("https://bhaveshbishnoi.com/")
    }
    if(platform==="linkedIn")
    {
        window.open("https://www.linkedin.com/in/bhavesh-bishnoi-5275a1210")
    }
    else{
        window.open("mailto:ibhaveshbishnoi@gmail.com")

    }
}

    return (
        <footer className="footer">
            <ContentWrapper>
             <div className="menuItems">
            <p >Creator : <span style={{fontWeight:"800"}}>Bhavesh Bishnoi</span> </p>
            </div>
            <p>To Connect :</p>
                <div className="socialIcons">
                  
                    <span className="icon"  onClick={()=>handleIcon("Portfolio")}>
                       W
                    </span>
                    <span className="icon"  onClick={()=>handleIcon("linkedIn")} >
                      In
                    </span>
                    <span className="icon"  onClick={()=>handleIcon("email")} >
                       M
                    </span>
    
                </div>
                <div className="infoText">
                 Hey, I am a skilled front-end developer with expertise in React and JavaScript. 
                 With a passion for creating user-friendly and interactive web applications, I excel in 
                 turning design mockups into fully functional and responsive React components.
                 Having a strong foundation in HTML, CSS, and JavaScript.
                </div>
                
            </ContentWrapper>
        </footer>
    );
};

export default Footer;