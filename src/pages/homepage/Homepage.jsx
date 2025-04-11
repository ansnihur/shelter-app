import React from "react";
import './Homepage.scss'
import Header from "../../components/header/Header";
import Homescreen from "../../components/homescreen/Homescreen";
import ExploreSection from "../../components/explore-section/ExploreSection";

const HomePage = () => {
    return (
        <div className="homepage">
            <Header />
            <Homescreen />
            <ExploreSection />
        </div>
    );
}

export default HomePage;