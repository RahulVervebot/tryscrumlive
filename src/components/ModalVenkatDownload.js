import React, { useState } from 'react'
import "../assets/css/modal.css"
import "../assets/css/style.css";
import axios from "axios";
import fileDownload from 'js-file-download'
import { Oval } from 'react-loader-spinner';




const ModalVenkatDownload = () => {

  const btn = {
    width: "150px",
    height: "50px",
    padding: "8px"
  }


  const [modal, modalSet] = useState("");

  const showModal = () => {
    modalSet("flex")
  }

  const hideModal = () => {
    modalSet("none")
  }






  const [state, setState] = useState({ name: "", email: "" });
  const [loader, setloader] = useState('');
  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", checkbox: "" });
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleDownload = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, filename)
    })
  }

 


  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setState({
      ...state,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const handleCheck = (event) => {
    setChecked((prevCheck) => !prevCheck);
    setErrors({
      ...errors,
      checkbox: "",
    });
  };



  const submitHandler = async (e) => {
    e.preventDefault();
    if (state.email && state.name && checked) {
      debugger;
      setloader('loading');
      const url =
        "https://tryscrumlive.vervebot.io//wp-json/contact-form-7/v1/contact-forms/7948/feedback?_wpcf7_unit_tag=wpcf7-e762f93";
      const formData = new FormData();
      formData.append("your-name", state.name);
      formData.append("your-email", state.email);

      const config = {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      };
      const res = await axios.post(url, formData, config);
      console.log("response", res);

      setloader(res.data.message)
      if(res){
        handleDownload("/venkatesh-border.pdf","venkatesh-profile.pdf")
      }
      if (typeof res.data.message !== undefined) {
        if (checked) {
          setState({ name: "", email: "" });
          setSubmissionMessage(res.data.message);
          // window.open("https://tryscrumlive.netlify.app/icp-ent.pdf", "_blank")
          // window.open(
          //   downloadFile,
          //   "_blank" // <- This is what makes it open in a new window.
          // );
          // window.location.href = downloadFile;
        }
      } else {
        alert("please try again");
      }
    } else {
      if (state.name === "") {
        debugger;
        setErrors({
          ...errors,
          name: "This is required",
        });
      }
      if (state.email === "") {
        setErrors({
          ...errors,
          email: "This is required",
        });
      }
      if (checked === false) {
        setErrors({
          ...errors,
          checkbox: "Please check this",
        });
      }
    }
  };

  
  

  




  return (
    <>
      {/* <button  class="thm-btn course-details__price-btn hide_mobile" style={btn} ><i class="fa fa-download"></i>&nbsp;&nbsp;Download Whitepaper</button> */}
      {/* <button  onClick={showModal} type="button" className="btn btn-danger btn-lg">Download</button> */}
      <button onClick={showModal} className="btn m-0 w-100" style={{ fontWeight: "600", border: "3px solid #f05457", boxShadow: "none", color: "#fff", backgroundColor: "#f05457",padding:"5px 5px", whiteSpace:"nowrap" }}>Download CV</button>
      {modal == "flex" ? <div className="modal_background" onClick={hideModal}></div> : null}
      <div className='modal_container' style={{ display: `${modal}` }}>
        <div className='modal_content'>
          <i fa className='fa fa-times close_modal' onClick={hideModal}></i>
          <div className='modal_box'>
            <form>
              <div className="form-group">
                <label for="formGroupExampleInput">Enter Your Name</label>

                <input
                  type="name"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="name"
                  value={state.name}
                  onChange={handleInputChange}
                />
                <small style={{ color: "red" }}>{errors.name}</small>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>

                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={state.email}
                  onChange={handleInputChange}
                />
                <small style={{ color: "red" }}>{errors.email}</small>

                { errors.email ? <small style={{ color: "red" }}>{errors.email}<br /></small>:null}
                <small id="emailHelp" className="form-text-modal text-muted">We'll never share your email with anyone else.</small>
              </div>
              <small style={{ color: "red" }}>{errors.checkbox}</small>
              <div className="form-check-modal">
                <input
                  type="checkbox"
                  className="form-check-input-modal"
                  id="exampleCheck1"
                  onChange={handleCheck}
                  value={checked}
                  defaultChecked={checked}
                />

                <label for="exampleCheck1">
                 <span className="form-check-label-modal">&nbsp;&nbsp;I agree to the tryScrum's</span> 
                  {/* <a className="btn" href="https://www.privacypolicies.com/privacy/view/cdc291875a6fb6718bd278ce4fecf819" target="__blank" style={{ backgroundColor: "red", color: "white" }}>
                    Privacy Policy
                  </a> */}
                </label>
                <a href="https://www.privacypolicies.com/privacy/view/cdc291875a6fb6718bd278ce4fecf819" target="__blank" style={{backgroundColor:"", color:"blue"}}>
                    &nbsp;&nbsp;Privacy Policy
                </a>
              </div>

              {loader == 'loading' ? <button
                type="submit"
                onClick={submitHandler}
                className="btn ml-0 text-white"
                disabled
                style={{background:"#f05457"}}
              >Download CV Now<div class="loader"></div></button> : <button
                type="submit"
                onClick={submitHandler}
                className="btn ml-0 text-white"
                style={{background:"#f05457"}}
              >Download CV Now</button>}
              <p style={{ color: "green" }}>{submissionMessage}</p>
            </form>
            {/* <a href="/arunvignesh-profile.pdf" style={{ textDecoration: "none", color: "#fff" }} download="arunvignesh-profile"><button className="btn m-0 bg-primary w-100" style={{ fontWeight: "600", border: "3px solid #4285f4", boxShadow: "none", color: "#fff", backgroundColor: "#73B79E" }}>Download</button></a> */}
          </div>
        </div>
      </div>

    </>
  )
}

export default ModalVenkatDownload
