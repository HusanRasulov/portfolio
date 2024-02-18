import React, { useEffect, useState } from 'react';

function NetStatus() {
    const [net, setNet] = useState(true);
    const [Display, setDisplay] = useState(true);
    
    useEffect(() => {
        window.addEventListener('online', () => {
            setNet(true);
            setTimeout(()=> {
                setDisplay(true);
            }, 2000);
            
        })
        window.addEventListener('offline', () => {
            setNet(false);
            setDisplay(false);
        })
    });

    return (
        net ?
            <div className="online" style={{opacity: `${Display ? "0" : '1'}`, transition: '0.5s'}} >
                <i className="bi bi-reception-4"></i> <b> network restored </b>
            </div>
            :
            <div className="offline">
                <i className="bi bi-exclamation-triangle-fill"></i> <b> network error </b>
            </div>
    )
}

export default NetStatus;