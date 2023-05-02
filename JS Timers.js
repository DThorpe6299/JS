function countdown(num){
	const decrement = num-1;
	const timeout = setTimeout(function(){
	countdown(decrement)
	},1000);
	console.log(decrement);
	if(decrement === 0){
    	console.log("DONE");
    	clearTimeout(timeout);
	}
	}


countdown(10);




function randomGame(){
	let counter = 0;
	const number = setInterval(function(){
  	 if(Math.random() <= 0.75){
       counter++;
  	 }else{
	counter++;
   console.log(counter);
   clearInterval(number);
   }
	},1000);
	}
    
randomGame();