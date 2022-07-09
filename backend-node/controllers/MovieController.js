const { all } = require('../app/routes')
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

//GET MOVIE CONTROLLER
async function getMovie(req, res) {
    try{
        
        const movie = await Movie.find({owner:req.user._id})
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

//UPDATE MOVIES CONTROLLER
async function updateMovie(req, res) {
    try{
        const movie = await Movie.findById(req.params.id)
        if(!movie){
            return res.status(404).send()
        }
        Object.assign(movie, req.body);
        movie.save();
        res.send({data:movie})
    }
    catch(error){
        res.status(400).send(error.message);
    }
            
}



module.exports = {
    addMovie, getMovie, deleteMovies, updateMovie
}