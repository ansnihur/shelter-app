import React from "react";
import './Homepage.scss'
import Header from "../../components/header/Header";
import Homescreen from "../../components/homescreen/Homescreen";

const HomePage = () => {
    return (
        <div className="homepage">
            <Header />
            <Homescreen />
        </div>
    );
}

export default HomePage;