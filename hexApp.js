//JS FILE FOR CHOOSING RANDOM BACKGROUND HEX CODE AND WRITING ITS NAME

// Adding the hex code factors
const hexFactors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]


//Adding Elements from the HTML file  
const btn = document.getElementById("bkground-color-btn-js") //The button
const color = document.getElementById("color") //The text of the color value
const backGround = document.getElementById("bkground") //The changing background

//Make the button responsive for the click
btn.addEventListener("click" , function () {
    //
    let colorsArr = []
    let colorHex = "#"
    let x = 0;
    
    while (x < 6){ //For creating 6 random values
    const num = Math.floor(Math.random()*hexFactors.length); //The place of the random element from  the hexFactors array
    colorsArr.push(hexFactors[num]) //Adding the random element to colonsArr array
    colorHex+=colorsArr[x] // Writing the hex code as a string instead of array
    x++
    }
   
    //Changing the background color
    backGround.style.backgroundColor = colorHex;
    //Changing the value of the color name(text)
    color.textContent = colorHex
    //Changing the color of the color name(text)
    color.style.color = colorHex
})













