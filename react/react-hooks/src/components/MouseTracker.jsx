import React, { useState, useEffect } from 'react'

const MouseTracker = () => {
    //新建一个 state
    const [position, setPosition] = useState({x:0, y:0});

    useEffect(
        () => {
            const updateMouse = (event) => {
                console.log("inner");
                setPosition({ x:event.clientX, y: event.clientY });
            }

            console.log('add listener');
            // click
            document.addEventListener('click', updateMouse); 
            
            // mousemove
            // document.addEventListener('mousemove', updateMouse);    

            //在组件卸载的时候清楚多余的 hooks
            return () => {
                console.log('remove listener');

                //click
                document.removeEventListener('click', updateMouse);

                // document.removeEventListener('mousemove', updateMouse);
            }

        }
    )

    return (
        <p>
            X:{position.x}, Y:{position.y}
        </p>
    )
}

export default MouseTracker