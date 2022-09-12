import React from "react";
import Hero from "./Hero";

export default function Home(){
    return (
        <div>
            <Hero text="Welcome to Home Section" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            Hi, Welcome to this Movie Browser App. This is a demo movie browser app. You can 
                            start searching for movies here by typing in the search bar above. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}