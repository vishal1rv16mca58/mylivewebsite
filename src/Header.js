import React from "react";

const Header=()=>{
    return(
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
                            <h1 className="display-2">Online Payment made<br/>Easy for you.</h1>
                            <p className="main-hero-para">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                            <h3>Get early access for you.</h3>
                            <div className="input-group mt-3">
                                <input type="text" 
                                    placeholder="Enter your Email"
                                    className="rounded-pill w-50 w-lg-75 me-3 p-2 form-control-text"/>
                            <div className="input-group-button">Get it now</div>
                            </div>
                        </div>
                        <div  className="col-12 col-lg-6 header-right-side d-flex justify-content-center flex-column align-items-center main-herosection-images">
                            <img src="./Images/hero1.jpeg" alt="heroimg" className="img-fluid"/>
                            <img src="./Images/hero4.jpeg" alt="heroimg" className="img-fluid main-hero-img2"/>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}
export default Header;