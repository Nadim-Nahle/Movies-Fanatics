const Movie = require('../models/movie')

//ADD MOVIE CONTROLLER
async function addMovie(req, res) {
    
    const movie = new Movie({...req.body,owner:req.user._id})
    try{

        await movie.save()
        res.status(201).send(movie)
    }
    catch(error){
        res.status(500).send(error.message)
    }   
    
}



module.exports = {
    addMovie, 
}