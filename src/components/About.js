import React from "react";
import Hero from "./Hero";

export default function About(){
    return(
        <div>
            <Hero text="About Section" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            Lorem ipsum dolor sit amet, yada yada yada yada yada yada doo dee yupee, mepta orp, colosussus
                            here you have the most precious thing that you can buy in the whole wide world and
                            its completely at your disposal
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}