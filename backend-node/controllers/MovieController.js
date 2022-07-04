const { all } = require('../app/routes')
const Movie = require('../models/movie')

//ADD MOVIE CONTROLLER
async function addMovie(req, res) {
    
    const movie = new Movie({...req.body})
    try{

        await movie.save()
        res.status(201).send(movie)
    }
    catch(error){
        res.status(500).send(error.message)
    }   
    
}

//GET Movie CONTROLLER
async function getMovie(req, res) {
    try{
        const movie = await Movie.find(all)
        if(!movie){
            return res.status(404).send()
        }
        res.status(200).send(movie)
    }
    catch(error){
        res.status(400).send(error.message);
    }
         
}

//DELETE MOVIE CONTROLLER
async function deleteMovies(req, res) {
    try{
        const movie = await Movie.findById(req.params.id);
        if(!movie){
            return res.status(404).send()
        }
        await movie.remove();
        res.status(200).send({data: true })
    }
    catch(error){
        res.status(400).send(error.message);
    }
         
    
}



module.exports = {
    addMovie, getMovie, deleteMovies
}