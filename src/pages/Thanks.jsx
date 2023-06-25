/* eslint-disable react/prop-types */

import ImageSuccess from "../assets/icon-success.svg"
import "../style/ThanksStyle.css"

function Thanks({email}) {
  return (
    <div className="Thanks-content">
        <div className="image-box">
            <img src={ImageSuccess} alt="Success" />
        </div>
        <div className="top-text">
            <h2>Thanks for subscribing!</h2>
        </div>
        <div className="sub-text">
            <p>
                A confirmation email has been sent to 
                <span> {email} </span>
                Please open it and click the button inside to confirm your subscription. 
            </p>
        </div>
        <div className="button-box">
            <button>Dismiss message</button>
        </div>
    </div>
  )
}

export default Thanks