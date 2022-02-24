let sum = (a, b) => a + b;
let mult = (a, b) => a * b;
let divide = (a, b) => {
	if(b === 0){
		throw new Error('divide by zero');
	}

	return a / b;
}

let mathOp = (a, b, op) => {
	let res;

	switch(op){
		case 'sum':
			res = sum(a, b);
			break;
		case 'mult':
			res = mult(a, b);
			break;
		case 'div':
			res = divide(a, b);
			break;
	}

	return res;
}

export default mathOp;