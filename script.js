let numbers = document.getElementById("numbers");
let button = document.getElementById("button");

button.addEventListener("click", function(){
for (let i = 0 /* since zero is an even number*/ ; i <= 10; i += 2){
  if(i === 10){
    numbers.innerHTML += i
  }
  else{
  numbers.innerHTML += i + ", "
  
  }
}
})