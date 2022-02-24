import mathOp from './math';

console.log(mathOp(2, 3, 'sum'));
console.log(mathOp(2, 3, 'mult'));

try{
	let humnas = Math.floor(Math.random() * 2);
	let res = mathOp(2, mathOp(10, humnas, 'div'), 'mult');
	console.log('Total money per human: ' + res);
}
catch(e){
	console.log(e.message);
}
finally{
	console.log('end');
}

async () => {
	try{
		// btn.disabled
		// await fetch
		// addToCart
	}
	catch(e){
		// alert
	}
	finally{
		// btn.enabled
	}
}
