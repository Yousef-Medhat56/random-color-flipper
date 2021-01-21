
const colorPalette = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

const btn = document.getElementById("bkground-color-btn-js")
const color = document.getElementById("color")
const backGround = document.getElementById("bkground")
btn.addEventListener("click" , function () {
    let x = 0;
    let colorsArr = []
    var colorHex = "#"
    while (x < 6){
    var num = Math.floor(Math.random()*colorPalette.length);
    colorsArr.push(colorPalette[num])
    colorHex+=colorsArr[x]
    x++
    }
    console.log()
    backGround.style.backgroundColor = colorHex;
    color.textContent = colorHex
    color.style.color = colorHex
})













