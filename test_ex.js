function checkPromo (num){
		
		let promoArray = [],
			even=0, 
			odd=0,
			counter = 0, 
			counter_2 = 0,
			bonus;

		while (num != 0){
			promoArray.unshift(num%10);
			num = (num - num%10)/10;
		}

	promoArray.forEach((item) =>{
		if(item % 2){odd+=item}else {even+=item}
	})
		
			for(let i = 0; i < promoArray.length; i++){
				if((promoArray[i]%2) && (promoArray[i + 1]%2) && (promoArray[i + 2])!==0){
						
					if(promoArray[i] < promoArray[i + 1] ){
						counter_2++;
					}

					counter++;
					i++;
				}
			}
			
		if(counter_2 === 2){
			bonus = 2000;
		}else
		if (counter === 2){
			bonus = 1000;
		}else 
		if(even > odd){
			bonus = 100;
		}else {
			bonus = 0;
		}

	return	bonus;

}


for (let i = 0; i < 100; i++){
console.log(`The promo code ${randomPromo()} gives you ${checkPromo(randomPromo())}`);
}



 function randomPromo(){

return parseInt( [0,0,0,0,0,0,0,0].map(() => Math.floor(Math.random() * 10)).join(''));  

}
