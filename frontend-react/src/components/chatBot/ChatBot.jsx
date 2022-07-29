import React, { useState } from "react";
import "./chatbot.css";
import botImage from "../../img/bot_image.jpg";

const ChatBot = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [time, setTime] = useState(`${hours}:${minutes}:${seconds}`); //using the useState hook to get the data from the local time and set it to the time variable
  const [dateTime, setDateTime] = useState(
    `${days[day]}, ${day} ${months[month]} ${year}`
  ); //using the useState hook to get the data from the local date and set it to the dateTime variable

  const checkStatus = (e) => {
    let isActive = false;
    if (dateTime === "Thursday, 20 April 2022") {
      //if the dateTime is Thursday, 20 April 2022, the bot will be inactive
      isActive = false;
    }
    const status = document.querySelector(".chatbot-status"); // selecting the status class
    if (isActive === true) {
      //if the bot is active
      status.innerHTML = "Active";
      status.style.color = "green";
    } else {
      status.innerHTML = "Inactive";
      status.style.color = "red";
    }
  };

  const handleInput = () => {
    const botMessage = document.querySelector("#message1");
    const humanMessage = document.querySelector("#message2");

    let badwords = ["fuck|bad|stupid|useless|bitch|crazy|nonsense"]; //adding the bad words
    let words = new RegExp(badwords);
    if (words.test(document.querySelector("#input").value)) {
      // if the input contains bad words
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "Please do not use bad words"; // display this message
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let welcome = [
      "Sup|sup|Hello|Hi|hello|hi|Hi|Yo|yo|Halla|halla|yello|yelow",
    ];
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".chatbot-status");
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "Hello There how are you doing today?";
        status.innerHTML = "Active";
        status.style.color = "green";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let bye = [
      "Bye|bye|Goodbye|goodbye|See you later|see you later|See you|see you",
    ];
    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".chatbot-status");
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "Bye, have a nice day";
        document.querySelector("#input").value = "";
      }, 2000);
      setTimeout(() => {
        status.innerHTML = "Not active";
        status.style.color = "red";
      }, 5000);
    }

    let thanks = [
      "Thanks|thanks|thank you|thank you very much|thank you very much",
    ];
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "You are welcome";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let how = [
      "How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",
    ];
    let words5 = new RegExp(how);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".chatbot-status");
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "I am fine, thank you";
        status.innerHTML = "Active";
        status.style.color = "green";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let good = [
      "That's good|Sound nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice",
    ];
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "😁";
        document.querySelector("#input").value = "";
      }, 1000);
    }

    let response = [
      "I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|Good|good|I'm good|i'm good|great|Great",
    ];
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML =
          "please choose a movie from the list(minions, doctor strange, jurassic world, thor, sonic, spider-man, dog, the lost city, morbius";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let movies = [
      "Dog|scream|thor|minions|doctor-strange|jurassic|world|thor|sonic|spider-man|dog|the-lost-city|morbius",
    ];
    let movieWords = new RegExp(movies);
    let chosenWord = document.querySelector("#input").value;
    if (movieWords.test(chosenWord)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = `here is your link http://localhost:3000/${chosenWord}`;
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let nameAsk = [
      "What's your name|what's your name|What is your name|what is your name",
    ];
    let words8 = new RegExp(nameAsk);
    if (words8.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "My name is Bot";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let owner = [
      "Who is the owner|who is the owner|Who is the owner of this bot|who is the owner of this bot|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner",
    ];
    let words9 = new RegExp(owner);
    if (words9.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "The owner of this bot is nadim";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let owner2 = ["Who's nadim|who's nadim|Who is nadim|who is nadim"];
    let words10 = new RegExp(owner2);
    if (words10.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML =
          "nadim is a programmer based on ReactJS and NodeJS ";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let ageAsk = [
      "What's your age|what's your age|What is your age|what is your age|How old are you|how old are you",
    ]; //adding the age-question
    let words11 = new RegExp(ageAsk);
    if (words11.test(document.querySelector("#input").value)) {
      // if the input contains some question
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "I am 0 year old";
        document.querySelector("#input").value = "";
      }, 2000);
    }
    humanMessage.innerHTML = document.querySelector("#input").value; // display the input
  };

  return (
    <div className="chatbot" onLoad={checkStatus}>
      <div className="chatbot-wrapper">
        <div className="chatbot-content">
          <div className="chatbot-header">
            <div className="chatbot-img">
              <img src={botImage} alt="" />
            </div>
            <div className="chatbot-right">
              <div className="chatbot-name">ChatBot</div>
              <div className="chatbot-status"></div>
            </div>
          </div>
          <div className="chatbot-main">
            <div className="chatbot-main_content">
              <div className="chatbot-messages">
                <div className="chatbot-bot-message" id="message2"></div>
                <div className="chatbot-human-message" id="message1"></div>
              </div>
            </div>
          </div>
          <div className="chatbot-bottom">
            <div className="chatbot-btm">
              <div className="chatbot-input">
                <input
                  type="text"
                  id="input"
                  placeholder="Enter your message"
                />
              </div>
              <div className="chatbot-btn">
                <button onClick={handleInput}>
                  <i className="fas fa-paper-plane"></i>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
