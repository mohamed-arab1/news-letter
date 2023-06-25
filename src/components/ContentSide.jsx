/* eslint-disable react/prop-types */
import { useState } from "react";
import icon_list from "../assets/icon-list.svg"
import "../style/contentSideStyle.css"
import { Link } from "react-router-dom";

function ContentSide({email, setEmail}) {

  
  const [isTouched, setIsTouched] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = e => {
    const emailValue = e.target.value;
    setEmail(emailValue)
    setIsValidEmail(validateEmail(emailValue))

  }

  const validateEmail = email => {
    const reg = /\S+@\S+\.\S+/;
    return reg.test(email);
  }

  const hanelSubmit = (e) => {
    e.preventDefault();
    setEmail("")
  }

  return (
    <div className="container">
      <div className="top-text">
        <h2>Stay updated!</h2>
        <p>Join 60,000+ product managers receving monthly updates on:</p>
      </div>
      <div className="middle-text">
        <div className="box">
          <img src={icon_list} alt="icon-list" />
          <p>Product discovery and building what matters</p>
        </div>
        <div className="box">
          <img src={icon_list} alt="icon-list" />
          <p>Measuring to ensure updetas are a success</p>
        </div>
        <div className="box">
          <img src={icon_list} alt="icon-list" />
          <p>And much more!</p>
        </div>
      </div>
      <div className="form-section">
        <form action="" onSubmit={hanelSubmit}>
          <div>
            <div className="box">
              <label htmlFor="email">Email Address</label>
              {!isValidEmail && isTouched ? (<p>Valid email required</p>) : null}
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@company.com"x  
              value={email}
              onChange={handleEmailChange}
              onBlur={() => setIsTouched(true)}
              className={!isValidEmail && isTouched ? "not-valid" : ""}
            />
          </div>
          <Link to={email !== "" ? "/Thanks" : null}>
            <button type="submit">
              Subscribe to monthly newsletter
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}



export default ContentSide;