import React, { createContext, useEffect, useRef, useState } from 'react';
export const Authcontext = createContext(null)
const Authprovider = ({ children }) => {
    const intervalRef = useRef(null);
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [child, setchild] = useState([
        {
            id: '659bd15b64fda850a0ba9fca',
            title: "sdffa",
            description: "dsafafaf",
            second: 24,
            isstarted: false,
            hour: 0,
            minute: 0
        },
        {
            id: '65a03c87e47690a2cfebb612',
            title: "adi",
            description: "sfg",
            second: 21,
            isstarted: false,
            hour: 0,
            minute: 0
        }
    ])

    // if (isstarted = true) {
    //     intervalRef.current = setInterval(() => {
    //         setElapsedTime(seconds => (seconds + 1));
    //         refetchfunc()
    //     }, 1000);
    // }
    const authinfo = {
        child,
        setchild,
        isRunning,
        setIsRunning,
        elapsedTime,
        setElapsedTime
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;
// import React, { createContext, useState } from 'react';
// export const Authcontext = createContext(null)
// const Authprovider = ({children}) => {
//     const [elapsedTime, setElapsedTime] = useState(0);
//     const authinfo = {
//         elapsedTime,
//         setElapsedTime
//     }
//     return (
//         <Authcontext.Provider value={authinfo}>
//             {children}
//         </Authcontext.Provider>
//     );
// };

// export default Authprovider;