import React, { useState } from 'react';


const useReactPath = () => {
    const [path, setPath] = React.useState(window.location.pathname);
    const listenToPopstate = () => {
        const winPath = window.location.pathname;
        setPath(winPath);
    };
    React.useEffect(() => {
        console.log("PATH CHANGED")
        window.addEventListener("popstate", listenToPopstate);
        return () => {
            window.removeEventListener("popstate", listenToPopstate);
        };
    }, []);
    return path;
};


export default useReactPath;