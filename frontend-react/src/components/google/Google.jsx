import React, { useEffect } from 'react'
import jwt_decode from "jwt-decode";
import axios from 'axios';

const REGISTER_URL = "/api/v1/auth/register/google";
const LOGIN_URL = "/api/v1/auth/login/google";


const Google = () => {


    function handleCallBackResponse(response){

        
        var userObject = jwt_decode(response.credential)

        localStorage.setItem('fullName',(userObject.name));
        localStorage.setItem('email',(userObject.email));
        localStorage.setItem('username',(`${userObject.given_name}_${userObject.family_name}`));
        localStorage.setItem('url',(userObject.picture));

        googleRegister();
        
    }

    useEffect(() => {

        /* global google */
        google.accounts.id.initialize({
            client_id: "80248917396-m4ihiqea2hs9ltjbri1j8lurko6710m7.apps.googleusercontent.com",
            callback: handleCallBackResponse
        });


        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: 'outline', size:"large"}
        )
    }, []);

    const googleRegister = async () => {

        const name = localStorage.getItem('fullName');
        const email = localStorage.getItem('email');
        const username = localStorage.getItem('username');
        const url = localStorage.getItem('url');

        try {

            const response = await axios.post(REGISTER_URL, {
                name,
                username,
                email,               
                url
              });
              console.log(response.data)
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div id="signInDiv"></div>
  )
}

export default Google