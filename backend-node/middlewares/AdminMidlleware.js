const axios = require('axios');

async function getAdmin(req, res, next) {


    const encodedParams = new URLSearchParams();
    encodedParams.append("image1Base64", process.env.REACT_APP_ADMIN_PHOTO);
    encodedParams.append("image2Base64", req.body.photo);
    const options = {
        method: 'POST',
        url: 'https://face-verification2.p.rapidapi.com/faceverification',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': process.env.REACT_APP_fACE_KEY,
            'X-RapidAPI-Host': 'face-verification2.p.rapidapi.com'
        },
        data: encodedParams
    };

    try {
        const { data } = await axios.request(options);
        const result = data.data.resultMessage;
        console.log(result)
        if (result === 'The two faces belong to the same person. ') {
            console.log('hello');
            next();
        }
    } catch (err) {
        res.status(400).send({ error: "Not an Admin" });
    }


}

module.exports = getAdmin;