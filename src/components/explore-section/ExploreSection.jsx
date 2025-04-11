import React from "react";
import './ExploreSection.scss'
import arrow from '../../assets/icons/arrow.png'
import explore1 from '../../assets/images/explore1.png'
import explore2 from '../../assets/images/explore2.png'
import explore3 from '../../assets/images/explore3.png'
import explore4 from '../../assets/images/explore4.png'
import explore5 from '../../assets/images/explore5.png'
import explore6 from '../../assets/images/explore6.png'

const ExploreSection = () => {
    return (
        <div>
            <div className="heading">
                <h2 className="heading-text">Досліджуй</h2>
                <h4 className="heading-descripton">На нашому сайті будь-хто може знайти спосіб допомогти тваринкам.</h4>
            </div>
            <div className="exploreSection">
                <div className="exploreSection__exploreElements">
                    <div className="exploreSection__exploreElements-first">
                        <div className="exploreSection__exploreElements-card --white">
                            <div className="exploreSection__exploreElements-card-1part">
                                <h3 className="exploreSection__exploreElements-card-1part-text">Задонатити</h3>
                                <a href="/" className="exploreSection__exploreElements-card-1part-link-arrow">
                                    <img src={arrow} className="exploreSection__exploreElements-card-1part-arrow" alt="Arrow" />
                                    </a>
                                </div>
                                <div className="exploreSection__exploreElements-card-2part">
                                    <img src={explore1} className="exploreSection__exploreElements-card-2part-img" alt="1card" />
                            </div>
                        </div>
                        <div className="exploreSection__exploreElements-card --orange">
                            <div className="exploreSection__exploreElements-card-1part">
                                <h3 className="exploreSection__exploreElements-card-1part-text">Забрати <br></br>тваринку</h3>
                                <a href="/" className="exploreSection__exploreElements-card-1part-link-arrow">
                                    <img src={arrow} className="exploreSection__exploreElements-card-1part-arrow" alt="Arrow" />
                                </a>
                            </div>
                            <div className="exploreSection__exploreElements-card-2part">
                                <img src={explore2} className="exploreSection__exploreElements-card-2part-img" alt="2card" />
                            </div>
                        </div>
                    </div>
                    <div className="exploreSection__exploreElements-second">
                        <div className="exploreSection__exploreElements-card --black">
                            <div className="exploreSection__exploreElements-card-1part">
                                <h3 className="exploreSection__exploreElements-card-1part-text">Прилаштувати <br></br>тваринку</h3>
                                <a href="/" className="exploreSection__exploreElements-card-1part-link-arrow">
                                    <img src={arrow} className="exploreSection__exploreElements-card-1part-arrow" alt="Arrow" />
                                </a>
                            </div>
                            <div className="exploreSection__exploreElements-card-2part">
                                <img src={explore3} className="exploreSection__exploreElements-card-2part-img" alt="3card" />
                            </div>
                        </div>
                        <div className="exploreSection__exploreElements-card --white">
                            <div className="exploreSection__exploreElements-card-1part">
                                <h3 className="exploreSection__exploreElements-card-1part-text">Блог</h3>
                                <a href="/" className="exploreSection__exploreElements-card-1part-link-arrow">
                                    <img src={arrow} className="exploreSection__exploreElements-card-1part-arrow" alt="Arrow" />
                                </a>
                            </div>
                            <div className="exploreSection__exploreElements-card-2part">
                                <img src={explore4} className="exploreSection__exploreElements-card-2part-img" alt="4card" />
                            </div>
                        </div>
                    </div>
                    <div className="exploreSection__exploreElements-third">
                        <div className="exploreSection__exploreElements-card --orange">
                            <div className="exploreSection__exploreElements-card-1part">
                                <h3 className="exploreSection__exploreElements-card-1part-text">Розіграші</h3>
                                <a href="/" className="exploreSection__exploreElements-card-1part-link-arrow">
                                    <img src={arrow} className="exploreSection__exploreElements-card-1part-arrow" alt="Arrow" />
                                </a>
                            </div>
                            <div className="exploreSection__exploreElements-card-2part">
                                <img src={explore5} className="exploreSection__exploreElements-card-2part-img" alt="5card" />
                            </div>
                        </div>
                        <div className="exploreSection__exploreElements-card --black">
                            <div className="exploreSection__exploreElements-card-1part">
                                <h3 className="exploreSection__exploreElements-card-1part-text">Історії <br></br>улюбленців</h3>
                                <a href="/" className="exploreSection__exploreElements-card-1part-link-arrow">
                                    <img src={arrow} className="exploreSection__exploreElements-card-1part-arrow" alt="Arrow" />
                                </a>
                            </div>
                            <div className="exploreSection__exploreElements-card-2part">
                                <img src={explore6} className="exploreSection__exploreElements-card-2part-img" alt="6card" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExploreSection;