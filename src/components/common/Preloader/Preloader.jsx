import React from 'react';
import preloader from "../../../assets/image/preloader.svg";

const Preloader = () => {
    return (
        <div>
            <img className="preloader" src={preloader} alt={""}/>

        </div>
    );
};

export default Preloader;