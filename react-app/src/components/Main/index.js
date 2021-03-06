import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Main.module.css";
import heroImage from './assets/hero-image.svg';
import appImage from './assets/inner-app.svg';

const Main = () => {

    return (
        <div>
            <header className={style.mainHeader}>
                <div className={style.heroWrapper}>
                    <div className={style.headerContent}>
                        <h2>Jello helps teams move work forward.</h2>
                        <Link to={'/sign-up'} className={style.mainBtn}>Sign up - it's free!</Link>
                    </div>
                    <div className={style.headerImage}>
                        <img src={heroImage} alt='' />
                    </div>
                </div>
            </header>
            <section className={style.mainSection}>
                <h2>It’s more than work. It’s a way of working together.</h2>
                <p>Start with a Jello board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit—all in one place.</p>
                <Link to={'/sign-up'} className={style.mainBtn}>Sign up - it's free!</Link>
            </section>
            <section className={style.productShowcaseLarge}>
                <div>
                    <img src={appImage} alt='' />
                </div>
            </section>
            <footer>
                <div>
                    <p>Crafted By:</p>
                    <div className={style.iconWrapper}>
                        <a href='https://github.com/codenamerick' target='_blank' rel='noopener noreferrer' className={style.socialLink}>
                            <i className="fab fa-github-square"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/rick-arocho/' target='_blank' rel='noopener noreferrer' className={style.socialLink}>
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
};


export default Main;
