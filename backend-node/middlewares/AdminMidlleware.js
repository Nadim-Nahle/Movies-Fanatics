const axios = require('axios');

async function getAdmin(req, res) {

    const base64 = req.body.photo;

    const encodedParams = new URLSearchParams();
    encodedParams.append("image1Base64", process.env.REACT_APP_ADMIN_PHOTO);
    encodedParams.append("image2Base64", base64);

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
        if (result === 'The two faces belong to the same person. ') {
            next();
        }
        res.status(400).send({ error: "Not an Admin" });
    } catch (err) {
        res.status(400).send({ error: "authentication X" });
    }


}

module.exports = getAdmin;