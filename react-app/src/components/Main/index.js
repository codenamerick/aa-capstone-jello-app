import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, Link } from 'react-router-dom';
import style from "./Main.module.css";
import heroImage from './assets/hero-image.svg';

const Main = () => {

    return (
        <header>
            <div className={style.heroWrapper}>
                <div className={style.headerContent}>
                    <h2>Jello helps teams move work forward.</h2>
                    <Link to={'/sign-up'} className={style.mainBtn}>Sign up - it's free!</Link>
                </div>
                <div className={style.headerImage}>
                    <img src={heroImage} alt='Hero Image' />
                </div>
            </div>
        </header>
    )
};


export default Main;
