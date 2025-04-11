import React from "react";
import './Homepage.scss'
import Header from "../../components/header/Header";
import Homescreen from "../../components/homescreen/Homescreen";
import ExploreSection from "../../components/explore-section/ExploreSection";
import Contact from "../../components/ask-about/Contact";

const HomePage = () => {
    return (
        <div className="homepage">
            <Header />
            <Homescreen />
            <ExploreSection />
            <Contact />
        </div>
    );
}

export default HomePage;