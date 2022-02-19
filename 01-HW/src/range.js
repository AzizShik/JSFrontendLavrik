function range(from, to, step){
	return {
		from, 
		to,
		step,
		[Symbol.iterator]: function(){
			let { from: value, to, step } = this;
			
			return {
				next(){
					let res;

					if(value <= to){
						res = { done: false, value };
					}
					else{
						res = { done: true };
					}
					
					value = parseFloat((value + step).toFixed(10));
					return res;
				}
			}
		}
	}
}

function* testGen(){
	yield 1;
	yield 2;
	yield 3;
}

function* rangeGen(from, to, step){
	for(let value = from; value <= to; value += step){
		yield value;
	}
}

export { range, testGen, rangeGen }