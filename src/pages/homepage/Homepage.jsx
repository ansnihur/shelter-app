import React from "react";
import './Homepage.scss'
import Header from "../../components/header/Header";
import Homescreen from "../../components/homescreen/Homescreen";
import ExploreSection from "../../components/explore-section/ExploreSection";
import Contact from "../../components/ask-about/Contact";
import PetStories from "../../components/petstories/PetStories";

const HomePage = () => {
    return (
        <div className="homepage">
            <Header />
            <Homescreen />
            <ExploreSection />
            <Contact />
            <PetStories />
        </div>
    );
}

export default HomePage;