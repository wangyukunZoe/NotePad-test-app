import React, { useState, useEffect } from 'react'

const MouseTracker = () => {
    //新建一个 state
    const [positions, setPositions] = useState({x:0, y:0});

    useEffect(
        () => {
            const updateMouse = (event) => {
                // console.log("inner");
                setPositions({ x:event.clientX, y: event.clientY });
            }

            // console.log('add listener');
            // click
            document.addEventListener('click', updateMouse); 
            
            // mousemove
            // document.addEventListener('mousemove', updateMouse);    

            //在组件卸载的时候清楚多余的 hooks
            return () => {
                // console.log('remove listener');

                //click
                document.removeEventListener('click', updateMouse);

                // document.removeEventListener('mousemove', updateMouse);
            }

        }
    )

    return (
        <p>
            X:{positions.x}, Y:{positions.y}
        </p>
    )
}

export default MouseTracker