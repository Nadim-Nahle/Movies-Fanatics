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
      <div class="premium-wrapper">
        <input type="radio" name="slider" id="tab-1" />
        <input type="radio" name="slider" id="tab-2" checked />
        <input type="radio" name="slider" id="tab-3" />
        <header>
          <label for="tab-1" class="tab-1">
            Basic
          </label>
          <label for="tab-2" class="tab-2">
            Standard
          </label>
          <label for="tab-3" class="tab-3">
            Team
          </label>
          <div class="slider"></div>
        </header>
        <div class="card-area">
          <div class="cards">
            <div class="row">
              <div class="price-details">
                <span class="price">10</span>
                <p>For premium</p>
              </div>
              <ul class="features">
                <li>
                  <i class="fas fa-check"></i>
                  <span>Unlimited links</span>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <span>Exclusive content</span>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <span>Get acess to our chatbot</span>
                </li>
                <li>
                  <i class="fas fa-check"></i>
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
