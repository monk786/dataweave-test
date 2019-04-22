import React from "react";
import "./Preloader.scss";

class Preloader extends React.Component{

   
    render(){
        return(
            <div className="preloader__wrap">
                <div className="preloader__content">

                        Loading...

                    
                </div>
            </div>
        )
    }
} 

export default Preloader;