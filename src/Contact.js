import React, { useState } from "react";

const Contact=()=>{
    const[data,setData]=useState({
        firstname:"",
        lastname:"",
        phone:"",
        email:"",
        address:"",
        message:""
    });
    let name,value;
    const postUserData=(event)=>{
        name=event.target.name;
        value=event.target.value;
        setData({...data,[name]:value});
    };
    const submitData=async(event)=>{
        event.preventDefault();
        const {firstname,lastname,phone,email,address,message}=data;
        const res=fetch('https://reactfirstapp-64ecf-default-rtdb.firebaseio.com/userDataRecords.json',
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                firstname,
                lastname,
                phone,
                email,
                address,
                message,
            }),
        }
        );
        if(res)
        {
            setData({
                firstname:"",
                lastname:"",
                phone:"",
                email:"",
                address:"",
                message:""
            })
            alert("Data saved");
        }
        else{
            alert("Something went wrong!!!");
        }

    }
    return(
        <>
            <section className="contactus-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="contact-leftside col-12 col-lg-5">
                                    <h1>Connect with our<br/> Sales Team.</h1>
                                    <p className="main-hero-para">
                                         In publishing and graphic design, Lorem ipsum is a placeholder text commonl
                                         value onChange postUserData wy used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the f
                                         value onChange postUserDatainal copy is available.
                                    </p>
                                    <figure>
                                        <img src="./images/hero1.jpeg" alt="Contact" className="img-fluid" />
                                    </figure>
                                </div>
                                <div className="contact-rightside col-12 col-lg-7">
                                    <form method="POST">
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" 
                                                    name="firstname" 
                                                    id="" 
                                                    className="form-control" 
                                                    placeholder="First Name"
                                                value={data.firstname} 
                                                onChange={postUserData}  />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" 
                                                name="lastname" 
                                                id="" 
                                                className="form-control" 
                                                placeholder="Last Name"
                                                value={data.lastname} 
                                                onChange={postUserData}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="Number" 
                                                name="phone" 
                                                id="" 
                                                className="form-control" 
                                                placeholder="Phone Number"
                                                value={data.phone} 
                                                onChange={postUserData}/>
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="Email"
                                                 name="email" 
                                                 id="" 
                                                 className="form-control" 
                                                 placeholder="Email ID"
                                                value={data.email} 
                                                onChange={postUserData}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <input type="text" 
                                                name="address" 
                                                className="form-control"
                                                 id=""
                                                  placeholder="add address"
                                                value={data.address} 
                                                onChange={postUserData}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <input type="text" 
                                                name="message" 
                                                id=""  
                                                className="form-control"
                                                 placeholder="Enter your message"
                                                value={data.message} 
                                                onChange={postUserData}/>
                                            </div>
                                        </div>
                                        <div class="form-check form-checkbox-style">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" className="main-hero-para" for="flexCheckDefault">
                                                I agree that dfkjfsdkfjkdsjldsflfdsjdf
                                            </label>
                                        </div>
                                        <button type="submit" onClick={submitData} className="btn btn-style w-100">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;