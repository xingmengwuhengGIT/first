
import React, {FunctionComponent,useEffect,useState} from "react";
import {Link} from "react-router-dom";
import {Counter} from "../hooks/useState";

const Home: FunctionComponent = () => {
    useEffect(() => {

    },[])
    const handleClick = () => {
    }
    return <div>
        <main>
            <h2>Welcome to the homepage</h2>
        </main>
        <Counter />
        <nav>
            <Link to="/about">about</Link>
        </nav>
        <nav>
            <Link to="/store">store</Link>
        </nav>
        <nav>
            <Link to="/immutable">immutable</Link>
        </nav>

        <button onClick={handleClick}>increment Store state</button>
    </div>
}

export default Home
