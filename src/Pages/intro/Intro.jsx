import { useEffect, useState } from "react"
import Typewriter from "typewriter-effect"

import "./style.scss"
import { useNavigate } from "react-router-dom"
export default function Intro() {

let [showCreator, setShowCreator]= useState(true)
let [showWelcome, setShowWelcome]= useState(false)
let [showLoader, setShowLoader]= useState(false)
let navigate = useNavigate()

useEffect(()=>{
 

    
    setTimeout(()=>{
      setShowCreator(false)
      setShowWelcome(true)

      setTimeout(()=>{
       setShowLoader(true)
      
       setTimeout(()=>{
       navigate("/home")
       },1800)
      },3000)

    },3000)

    return(
      setShowLoader(false)
    )
   
},[])

  return (
    <div>
        {showCreator && <div className="Creator">
        
        <div>
        <h2><span>B</span>havesh <span>B</span>ishnoi</h2>
        <h4>Full Stack Web Developer</h4>
        </div>
        </div>}
        {showWelcome && <div className="welcomeScreen">
        
        <div>
        <Typewriter
       options={{
       strings: ['NETFLIX'],
       autoStart: true,
       loop: false,
       cursor:"",delay:300
        }}
        />
        </div>
        { <div className="loader" style={{borderTop:`${showLoader ? "3px solid red" : "3px solid black"}` }}></div>}

        </div>
        }

    </div>
  )
}
