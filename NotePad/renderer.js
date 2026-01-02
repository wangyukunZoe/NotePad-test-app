const info = document.getElementById('info');
info.innerHTML = `Chrome (v${window.versions.chrome}), Node.js (v${window.versions.node})`

//Change Window Title
const btn = document.getElementById('btn')
const titleInput = document.getElementById('title')

//Read the File's size
const btn2 = document.getElementById("btn2")
const contentInput = document.getElementById("content")

//处理主进程分秒计算问题SetInterval
const counter = document.getElementById('counter')

//Change the Window Title
//完成发送任务 -> 转到 main.js 完成事件的接收
btn.addEventListener('click', () => {

    const title = titleInput.value
    window.electron.setTitle(title)
})

//Reading the File's Size
btn2.addEventListener('click', async () => {

    const content = contentInput.value
    const len = await window.electron.writeFile(content)
    console.log(len)
    info.innerHTML = `File Size: ${len}`
})

window.electron.onUpdateCounter((value) => {
    counter.innerText = value.toString()
})

//Happy 2026! 考研一定要上岸！