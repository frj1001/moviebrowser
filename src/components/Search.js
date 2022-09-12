import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom"

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const customUrl = 'https://bitsofco.de/content/images/2018/12/broken-1.png'
    const detailUrl = `/movies/${movie.id}`
    return(
        <div className="col-lg-3 col-md-3 col-2 my-4">
            <div className="card">
                <img src={movie.poster_path ? `${posterUrl}` : `${customUrl}`} className="card-img-top" alt={movie.original_title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailUrl} className="btn btn-primary">Show details</Link>
                </div>
            </div>
        </div>
    )
}

export default function Search({ keyword, searchResults }){
    
    const title = `You are searching for ${keyword}`
    
    const resultsDom = searchResults.map((obj,i) => {
        return (<MovieCard movie={obj} key={i}/>)
    })

    if(searchResults.length > 0){
        return(
            <div>
                <Hero text={title} />
                <div className="container">
                    <div className="row">
                        {resultsDom}
                    </div>
                </div>
            </div>
        )
    }

    if(searchResults.length === 0 && keyword !==""){
        return(
            <div>
                <Hero text={title} />
                <h1>Record Not found</h1>
            </div>
        )
    }

    
}