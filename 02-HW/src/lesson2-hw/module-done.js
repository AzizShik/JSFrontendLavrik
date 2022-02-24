/* global Proxy */
function watchObj(node, callback){
	return new Proxy(node, {
		get(target, name){
			if(typeof target[name] === 'object'){
				return watchObj(target[name], callback);
			}
			else if(typeof target[name] === 'function'){
				return target[name].bind(target);
			}
			else{
				return target[name];
			}
		},
		set(target, name, value){
			target[name] = value;
			callback(name, value);
			return true;
		}
	});
}

class EmailParser{
	#private = { email: null, isCorrect: null, name: null, domain: null }

	constructor(email){
		this.email = email;
	}
	
	set email(email){
		let st = this.#private;
		st.email = email;
		st.isCorrect = /^[aA-zZ0-9]+@[aA-zZ0-9]+\.[aA-zZ0-9]{2,10}$/.test(email);
		st.name = st.isCorrect ? email.split('@')[0] : null;
		st.domain = st.isCorrect ? email.split('@')[1] : null;
	}

	get email(){
		return this.#private.email;
	}

	get isCorrect(){
		return this.#private.isCorrect;
	}

	get name(){
		return this.#private.name;
	}

	get domain(){
		return this.#private.domain;
	}
}

/* class EmailParser{
	constructor(email){
		this.email = email;
	}
	
	get isCorrect(){
		return /^[aA-zZ0-9]+@[aA-zZ0-9]+\.[aA-zZ0-9]{2,10}$/.test(this.email);
	}

	get name(){
		return this.isCorrect ? this.email.split('@')[0] : null;
	}

	get domain(){
		return this.isCorrect ? this.email.split('@')[1] : null;
	}
} */

export { watchObj, EmailParser };