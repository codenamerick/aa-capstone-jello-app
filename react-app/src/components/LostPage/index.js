import React from "react";
import {Link} from 'react-router-dom';

const LostPage = () => {

    return (
        <div className="not-found-page">
            <h1>404</h1>
            <h2>Lost? Let's find our way back <Link to='/'>home</Link>.</h2>
        </div>
    );
};


export default LostPage;
