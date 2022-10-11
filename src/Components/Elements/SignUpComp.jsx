import {React, useState} from "react";
import { Link } from "react-router-dom";

const SignUpComp = () => {
 
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [cpass, setcpass] = useState('');
  
    const handleSubmit=(event)=>{
            event.preventDefault();
            const data=[fname,lname,phone,email,pass,cpass];
            localStorage.setItem("Local Storage data", JSON.stringify(data));
            sessionStorage.setItem("Session Storage data", JSON.stringify(data));
            // console.log(data);   
    }

  return (
    <>
      <div className="container signup-fluidcontainer">
        <div className="signup-container">
            
          <div className="row">
            <div className="col-md-4 img-col">
              <img className="img-fluid sideimg" src="assets/side-img.png" alt="" />
            </div>
            <div className="col-md-7 signup-col2">
            <h2 className="pt-4 ps-3 text-white">Register</h2>
            <p className="pt-3 ps-3 pb-2">Let's get you all setup so you can verify your personal account and begin setting up your profile</p>
              <div className="container">

                <div className="row mt-3">
                  <div className="col-md-6 fw-bold">
                    <label htmlFor="fname" name="fname" >First Name</label>
                    <br />
                    <input type="text" className="input-width" value={fname} onChange={(e)=>{setfname(e.target.value)}}></input>
                  </div>
                  <div className="col-md-6 fw-bold">
                    <label htmlFor="lname" name="lname" >Last Name</label>
                    <br />
                    <input type="text" className="input-width" value={lname} onChange={(e)=>{setlname(e.target.value)}}></input>
                  </div>
                  
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 fw-bold">
                    <label htmlFor="phone" name="number">Phone Number</label>
                    <br />
                    <input type="number" className="input-width"  value={phone} onChange={(e)=>{setphone(e.target.value)}}></input>
                  </div>
                  <div className="col-md-6 fw-bold">
                    <label htmlFor="email" name="mail" >Email</label>
                    <br />
                    <input type="email" className="input-width" value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 fw-bold">
                    <label htmlFor="password" name="pass" >Password</label>
                    <br />
                    <input type="password" className="input-width" value={pass} onChange={(e)=>{setpass(e.target.value)}}></input>
                  </div>
                  <div className="col-md-6 fw-bold">
                    <label htmlFor="confirm password" name="cpass" >Confirm Password</label>
                    <br />
                    <input type="password" className="input-width" value={cpass} onChange={(e)=>{setcpass(e.target.value)}}></input>
                  </div>
                </div>
              </div>
              <div className="pt-3 ps-2">
              <input type="checkbox" className="checkbox-width"></input>
                    <label className="ps-2" htmlFor="">I agree to all the <a className="text-decoration-none" href="/"> Terms, Privacy</a> and <a className="text-decoration-none"  href="/">Fees.</a></label>
              </div>

              <button className="btn btn-primary mt-3 ms-2" onClick={handleSubmit}> Register </button>
                   <p className="fw-bold pt-3 pb-3 ps-2">Already have an account? <Link to="/" className="text-primary text-decoration-none last-link">Login</Link> </p> 
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpComp;
