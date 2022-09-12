import React, { useState } from "react";
import Hero from "./Hero";
import { useParams } from "react-router-dom"
import { useEffect } from "react";

export default function MovieView(){

    const {id} = useParams()


    const [movieDetails, setMovieDetails] = useState({})
    const [isloading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b81ac945d0d64ed0c58e0ad5724ec469&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data)
                setIsLoading(false)
            })
    }, [id])

    function renderMovieDetails(){
        if(isloading){
            return <Hero text="Loading..."/>
        }
        if(movieDetails){
            const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
            return (
                <div>
                    <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={posterPath} alt="..." className="img-fluid shadow rounded" />
                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetails.original_title}</h2>
                                <p>{movieDetails.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return renderMovieDetails()
}