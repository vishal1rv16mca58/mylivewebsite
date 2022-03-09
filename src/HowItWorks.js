import React, { useState } from "react";
import Workapi from "./API/Workapi";
const HowItWorks=()=>{

    const[data,setData]=useState(Workapi);
    console.log(data);
    return(
        <>
            <section>
                <div className="work-container container">
                    <h1 className="main-heading text-center">How does it work</h1>
                    <div className="row">
                    {
                        data.map((curele)=>{
                            const {id,logo,title,info}=curele;
                            return(
                                <>
                                <div className="col-12 col-lg-4 text-center work-container-subdiv">
                                    <i className={`fontawesome-style ${logo}`}></i>
                                    <h2 className="sub-heading">{title}</h2>
                                    <p className="main-hero-para w-100">{info}</p>
                              </div>
                                </>
                            )
                        })
                    }    
                    </div>
                </div>
            </section>
        </>
    )
}
export default HowItWorks;