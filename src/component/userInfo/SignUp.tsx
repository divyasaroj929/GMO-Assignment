import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./signup.css";
const SignUp = () => {
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState(false);

  const [email, setEmail] = useState("");
  const [erremail, setErremail] = useState(false);

  const [phone, setPhone] = useState("");
  const [errorPhone, setErrorPhone] = useState(false);

  const navigate = useNavigate();

  const emilregex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const phoneregex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

  const turnLogin = () => {
    navigate("/secondpage");
  };

  const hendlename = (e: any) => {
    let name = e.target.value;
    if (name.length < 3) {
      setErrorName(true);
    } else {
      setErrorName(false);
    }
    setName(name);
  };

  const hendlePhone = (e: any) => {
    let phone = e.target.value;
    if (!phone.match(phoneregex)) {
      setErrorPhone(true);
    } else {
      setErrorPhone(false);
    }
    setPhone(phone);
  };

  const hendleEmail = (e: any) => {
    let email = e.target.value;
    if (!email.match(emilregex)) {
      setErremail(true);
    } else {
      setErremail(false);
    }
    setEmail(email);
  };

  const submitButton = (event: any) => {
    event.preventDefault();
    if (name.length < 3) {
      setErrorName(true);
    } else {
      setErrorName(false);
    }

    if (!phone.match(phoneregex)) {
      setErrorPhone(true);
    } else {
      setErrorPhone(false);
    }

    if (!email.match(emilregex)) {
      setErremail(true);
    } else {
      setErremail(false);
    }

    if (name.length >= 3 && email.match(emilregex) && phone.match(phoneregex)) {
      alert("Form has been submitted");
      const userDetails = { name, email, phone };
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      console.log(localStorage);

      turnLogin();
    }
  };

  return (
    <>
      <div className="second-container">
        <div className="container">
          <div className="title">
            <h1 className="heading-box">user-information</h1>
          </div>
          <form onSubmit={submitButton}>
            <div className="all-input-box">
              <div className="two-container">
                <div className="div-3">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    autoComplete="off"
                    id="fname"
                    onChange={hendlename}
                    value={name}
                  />
                  {errorName && (
                    <span id="warning-1">
                      First Name length greater than 2 characters
                    </span>
                  )}
                </div>
              </div>

              <div className="div-3">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="phone"
                  autoComplete="off"
                  id="phone"
                  onChange={hendlePhone}
                  value={phone}
                />
                {errorPhone && (
                  <span id="warning-2">Length greater than 10 Number</span>
                )}
              </div>

              <div className="div-3">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter your Email"
                  id="mail"
                  onChange={hendleEmail}
                  value={email}
                />
                {erremail && <span>Enter your valid email</span>}
              </div>
            </div>
            <div className="btn">
              <button type="submit" id="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
