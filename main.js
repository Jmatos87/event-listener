// GO!

//Part 1
var navButton = document.querySelector('button')
var navBar = document.querySelector('.nav-menu')
var navVis = true



var why = function (){

	if(navVis){
		navBar.style.opacity = 0
		navButton.innerHTML = 'show nav'
		navVis = false
	}
	else {
		navBar.style.opacity = 1
		navButton.innerHTML = 'hide nav'
		navVis = true
	}

}

navButton.addEventListener('click',why)

//{Part 2}



var inputBox = document.querySelector('.answer-box input')
var ulList = document.querySelector('.guest-list')

var addStuff = function (keyEvent){
	var inputEl = keyEvent.srcElement

	  if (keyEvent.keyCode === 13) {
      var userInput = inputEl.value
      var newLi =document.createElement('li')
      newLi.innerHTML=userInput
      ulList.appendChild(newLi)
      inputEl.value = ''
 }


}


inputBox.addEventListener('keydown',addStuff)
// BONUS 


var bonusInputBox = document.querySelector('#answerBox input')
var bonusUlList = document.querySelector('#theList')


var hi = function () {
  this.parentNode.parentNode.removeChild(this.parentNode)


}

var bonusAddStuff = function (keyEvent){
	var inputEl = keyEvent.srcElement

	  if (keyEvent.keyCode === 13) {
      var userInput = inputEl.value
      var newLi =document.createElement('li')
      var newButton = document.createElement('button')
      		newButton.innerHTML = 'X'
      		
      		newLi.innerHTML=userInput
      		bonusUlList.appendChild(newLi)
      		newLi.appendChild(newButton)
      		inputEl.value = ''
 	  }		newButton.addEventListener("click",hi)


}

bonusInputBox.addEventListener('keydown',bonusAddStuff)
