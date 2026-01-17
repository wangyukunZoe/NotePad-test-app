import React, { useState } from 'react'

const LikeButton = () => {
    //const [like, setLike] = useState(0);    //初始 state 的值 []这里是数组的结构
    // useState 返回一个数组 [当前的 state，更新的state的函数]两项 
    // setlike 是更新变量的一种方法

    const [like, setLike] = useState(0);
    const [on, setOn] = useState(true);
    // const [obj, setObj] = useState({ like: 0, on: true })
    return (
        <>
            <button onClick={() => { setLike(like + 1) }}>
                {like} 👍
            </button>
            <p></p>
            <button onClick={() => { setOn(!on) }}>
                {on ? 'On' : 'Off'}
            </button>
        </>
    )
}

/*

return (
        <button onClick={() => { setLike(like + 1) }}>
            {like} 👍
        </button>
    )

*/

export default LikeButton