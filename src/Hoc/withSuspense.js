import React from "react";
import Preloader from "../components/common/Preloader/Preloader";

const withSuspense = (Component) => (props) => {
    return <React.Suspense fallback={<Preloader/>}>
        <Component {...props}/>
    </React.Suspense>
}

export default withSuspense;

