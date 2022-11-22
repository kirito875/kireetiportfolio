import React,{useEffect,useRef,useState} from "react";
import DOTS from 'vanta/dist/vanta.dots.min'
import './Profile.css'


function Profile(){

  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(DOTS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xffff,
        color2: 0xffff,
        backgroundColor: 0x0,
        spacing: 34.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect]);


    return(
        <div className="profile" ref={myRef}>
         
        
        </div>
    )
}

export default Profile;