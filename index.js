let button=document.querySelector("#btn")
let cont=document.querySelector("#screen")
let screenText=document.querySelector("#code")
let colorCard=document.querySelector("#hexCard")

let colorGen=()=>{
    let char=`0123456789ABCDEF`
    let color=`#`
    for(let i=0;i<6;i++){
        color+=char[Math.floor(Math.random()*16)]
    }
     cont.style.backgroundColor=color
    screenText.textContent=color
}

const copy=()=>{
    const originalText=screenText.textContent

    navigator.clipboard.writeText(originalText).then(()=>{
        screenText.textContent='COPIED'
        setTimeout(()=>{
            screenText.textContent=originalText
        }, 1000)
    })
}

button.addEventListener('click', colorGen)
colorCard.addEventListener('click', copy)
colorGen()