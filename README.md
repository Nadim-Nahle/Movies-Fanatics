<img src='./SEF Readme Template (3)/title1.svg'>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available.  

**[PROJECT PHILOSOPHY](https://github.com/Nadim-Nahle/Movies-Fanatics#-project-philosophy) • [WIREFRAMES](https://github.com/Nadim-Nahle/Movies-Fanatics#-wireframes) • [TECH STACK](https://github.com/Nadim-Nahle/Movies-Fanatics#-tech-stack) • [IMPLEMENTATION](https://github.com/Nadim-Nahle/Movies-Fanatics#-impplementation) • [HOW TO RUN?](https://github.com/Nadim-Nahle/Movies-Fanatics#-how-to-run)**

</div>

<br><br>

<img src='./SEF Readme Template (3)/title2.svg'>

> A website that connect users based on their movie taste.
> Users can check trending movies or search for any movie and watch or download trailers.<br/>
> Users can follow other users by swiping right based on their favorite movie.<br/>
> Users that follow each others can connect via live chat to discuss movies or tv shows.</br>
> Premium users get access to a chatbot that provides exclusive links to download movies.</br>
> Admins can acess the admin panel using a face recognition login system.

<br><br>

<img src='./SEF Readme Template (3)/title3.svg'>

> This design was planned before on paper, then moved to Figma app for the fine details.
Note that i didn't use any styling library or theme, all from scratch and using pure css modules

| Landing  | Movies  |
| -----------------| -----|
| ![Landing](https://i.ibb.co/v4NdHHL/wireframes-5.png") | ![Movies](https://i.ibb.co/7GTfpXZ/wireframes-7.png") |

|Sign up | Live chat  |
| -----------------| -----|
| ![Sign up](https://i.ibb.co/m5Qfx3h/wireframes-8.png) | ![Live chat](https://i.ibb.co/WF33gp2/wireframes-10.png) |


<br><br>

<img src="./SEF Readme Template (3)/title4.svg"/>

Here's a brief high-level overview of the tech stack the Well app uses:
<ul>
<li>This project uses the [React js library](https://reactjs.org/). React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.</li>
<br/>
<li>The admin panel is created using the [React js Library](https://reactjs.org/) inside the [electron js Framework](https://www.electronjs.org).</li>
<br/>
<li>The server side of the project is build using the [Node js](https://nodejs.org/en/) and the [express js Framework](https://expressjs.com/).</li>
<br/>
<li>For database, the app uses the [mongodb](https://www.mongodb.com/). MongoDB is a source-available cross-platform document-oriented database program.</li>
<br/>
<li>For live chat, the app uses the [socket io](https://socket.io/). Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.</li>
<ul>


<br><br>

<img src='./SEF Readme Template (3)/title5.svg' alt='implementation'>

Using the above mentioned tech stacks and the wireframes build with figma from the user sotries we have, the implementation of the app is shown as below, these are screenshots from the real app

| Admin login using face recognition  | Google Login  |
| -----------------| -----|
| ![Admin login using face recognition](https://media.giphy.com/media/ZwNBxi1A79As3zTX3g/giphy.gif) | ![Google Login](https://media.giphy.com/media/0u7z9mwbpxOAqz2wvq/giphy.gif)

| Live chat | Swipe right or left!  |
| -----------------| -----|
| ![Live chat](https://media.giphy.com/media/WCm8i3uQ6n52HYKdp7/giphy.gif) | ![Swipe right or left!](https://media.giphy.com/media/k1QCiYwsxeoWg0ND81/giphy.gif)

| Movies and chrome extension | Chatbot for premium users  |
| -----------------| -----|
| ![Movies and chrome extension](https://media.giphy.com/media/FGLGvDdIvheRtJxT3u/giphy.gif) | ![Chatbot for premium users](https://media.giphy.com/media/LI6eSRIaQN8E7gClm0/giphy.gif)

| Profile | Responsiveness  |
| -----------------| -----|
| ![Profile](https://media.giphy.com/media/qOfZDABXNQDs28A4xe/giphy.gif) | ![Chatbot for premium users](https://media.giphy.com/media/zdGcURnZXaEJ8Sedzw/giphy.gif)

<br><br>


<img src='./SEF Readme Template (3)/title6.svg' alt='how to run'>

> This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Contact me for apis keys
2. Clone the repo
   ```sh
   git clone https://github.com/Nadim-Nahle/Movies-Fanatics.git
   ```
3. Open `backend-Node` folder

4. Install NPM packages
   ```sh
   npm install
   ```
5. Enter your API in `.env`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
6. run `npm start` to run the backend
   ```sh
   npm start';
   ```
7. Open `backend-Node` folder

8. Install NPM packages
   ```sh
   npm install
   ```
9. run `npm run start` to run the socket
   ```sh
   npm run start';
   ```
10. Open `frontend-react` folder

11. Install NPM packages
   ```sh
   npm install
   ```
12. Enter your API in `.env`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
13. run `npm start` to run the frontend
   ```sh
   npm start';
   ```
14. Open `electron-react-admin` folder

15. Install NPM packages
   ```sh
   npm install
   ```
16. run `npm run electron` to run the electron admin dashboard
   ```sh
   npm run electron';
   ```
17. Enjoy the project!
   

