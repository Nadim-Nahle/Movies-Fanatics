import React from "react";
import { useNavigate } from "react-router";
import "./premium.css";

const Premium = () => {
  const navigate = useNavigate();
  const openPayment = () => {
    navigate("/payment");
  };
  return (
    <div className="premium-body">
      <div className="premium-wrapper">
        <input type="radio" name="slider" id="tab-1" />
        <input type="radio" name="slider" id="tab-2" readOnly checked />
        <input type="radio" name="slider" id="tab-3" />
        <header>
          <label htmlFor="tab-1" className="tab-1">
            Basic
          </label>
          <label htmlFor="tab-2" className="tab-2">
            Standard
          </label>
          <label htmlFor="tab-3" className="tab-3">
            Team
          </label>
          <div className="slider"></div>
        </header>
        <div className="card-area">
          <div className="cards">
            <div className="row">
              <div className="price-details">
                <span className="price">10</span>
                <p>For premium</p>
              </div>
              <ul className="features">
                <li>
                  <i className="fas fa-check"></i>
                  <span>Unlimited links</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Exclusive content</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Get acess to our chatbot</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Unlimited movie download</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button onClick={openPayment}>Choose plan</button>
      </div>
    </div>
  );
};

export default Premium;
