var img = document.getElementsByClassName('goal')
var g1 = document.getElementById('g1')
var g2 = document.getElementById('g2')
var g3 = document.getElementById('g3')
var g4 = document.getElementById('g4')
var g5 = document.getElementById('g5')
var checks = document.getElementsByClassName('checks')

var imgs = ['pictures/draw.png', 'pictures/exercise.png', 'pictures/guitar.png', 'pictures/programming.png', 'pictures/read.png', 'pictures/study.png', 'pictures/walk.png', 'pictures/water.png']
var iC = imgs.length

var content = []
console.log(iC)

while (iC > 0){
    var randomIndex = Math.floor(Math.random() * imgs.length)
    content.push(imgs[randomIndex])
    imgs.splice(randomIndex, 1)
    iC--
    console.log(content)
}

g1.src = content[0]
g2.src = content[1]
g3.src = content[2]
g4.src = content[3]
g5.src = content[4]

var src1 = g1.getAttribute('src')
var c1 = document.getElementById('cont1')
switch (src1) {
    case "pictures/draw.png":
        c1.innerHTML += 'Draw something!'
        break
    case "pictures/exercise.png":
        c1.innerHTML += 'Exercise!'
        break
    case "pictures/guitar.png":
        c1.innerHTML += 'Play an instrument!'
        break 
    case "pictures/programming.png":
        c1.innerHTML += 'Study programming!' 
        break
    case "pictures/read.png":
        c1.innerHTML += 'Read!'
        break
    case "pictures/study.png":
        c1.innerHTML += 'Study!'
        break
    case "pictures/walk.png":
        c1.innerHTML += 'Go for a walk!'
        break
    case "pictures/water.png":
        c1.innerHTML += 'Drink enough water!'
}
    
var src2 = g2.getAttribute('src')
var c2 = document.getElementById('cont2')
switch (src2) {
    case "pictures/draw.png":
        c2.innerHTML += 'Draw something!'
        break
    case "pictures/exercise.png":
        c2.innerHTML += 'Exercise!'
        break
    case "pictures/guitar.png":
        c2.innerHTML += 'Play an instrument!'
        break 
    case "pictures/programming.png":
        c2.innerHTML += 'Study programming!' 
        break
    case "pictures/read.png":
        c2.innerHTML += 'Read!'
        break
    case "pictures/study.png":
        c2.innerHTML += 'Study!'
        break
    case "pictures/walk.png":
        c2.innerHTML += 'Go for a walk!'
        break
    case "pictures/water.png":
        c2.innerHTML += 'Drink enough water!'
}

var src3 = g3.getAttribute('src')
var c3 = document.getElementById('cont3')
switch (src3) {
    case "pictures/draw.png":
        c3.innerHTML += 'Draw something!'
        break
    case "pictures/exercise.png":
        c3.innerHTML += 'Exercise!'
        break
    case "pictures/guitar.png":
        c3.innerHTML += 'Play an instrument!'
        break 
    case "pictures/programming.png":
        c3.innerHTML += 'Study programming!' 
        break
    case "pictures/read.png":
        c3.innerHTML += 'Read!'
        break
    case "pictures/study.png":
        c3.innerHTML += 'Study!'
        break
    case "pictures/walk.png":
        c3.innerHTML += 'Go for a walk!'
        break
    case "pictures/water.png":
        c3.innerHTML += 'Drink enough water!'
}

var src4 = g4.getAttribute('src')
var c4 = document.getElementById('cont4')
switch (src4) {
    case "pictures/draw.png":
        c4.innerHTML += 'Draw something!'
        break
    case "pictures/exercise.png":
        c4.innerHTML += 'Exercise!'
        break
    case "pictures/guitar.png":
        c4.innerHTML += 'Play an instrument!'
        break 
    case "pictures/programming.png":
        c4.innerHTML += 'Study programming!' 
        break
    case "pictures/read.png":
        c4.innerHTML += 'Read!'
        break
    case "pictures/study.png":
        c4.innerHTML += 'Study!'
        break
    case "pictures/walk.png":
        c4.innerHTML += 'Go for a walk!'
        break
    case "pictures/water.png":
        c4.innerHTML += 'Drink enough water!'
}

var src5 = g5.getAttribute('src')
var c5 = document.getElementById('cont5')
switch (src5) {
    case "pictures/draw.png":
        c5.innerHTML += 'Draw something!'
        break
    case "pictures/exercise.png":
        c5.innerHTML += 'Exercise!'
        break
    case "pictures/guitar.png":
        c5.innerHTML += 'Play an instrument!'
        break 
    case "pictures/programming.png":
        c5.innerHTML += 'Study programming!' 
        break
    case "pictures/read.png":
        c5.innerHTML += 'Read!'
        break
    case "pictures/study.png":
        c5.innerHTML += 'Study!'
        break
    case "pictures/walk.png":
        c5.innerHTML += 'Go for a walk!'
        break
    case "pictures/water.png":
        c5.innerHTML += 'Drink enough water!'
}

if (checks.checked == true){
    c1.innerHTML = 'goku'
}

