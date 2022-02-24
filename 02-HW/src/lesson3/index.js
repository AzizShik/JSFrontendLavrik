import * as badApi from './api-callbacks';
import * as promiseApi from './api-promise';
import "regenerator-runtime/runtime.js";

(async () => {
	try{
		let user = await promiseApi.userReg();
		console.log(user);
		let session = await promiseApi.userAuth(user.id);
		console.log(session);
		let data = await promiseApi.userData(session.token);
		console.log(data);
	}
	catch(e){
		console.log(e);
	}
	finally{
		console.log('end aa')
	}
})();

/* promiseApi
	.userReg()
	.then(user => {
		console.log(user);
		return promiseApi.userAuth(user.id);
	})
	.then(session => {
		console.log(session);
		return promiseApi.userData(session.token);
	})
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.log(err);
	})
	.finally(() => {
		console.log('end')
	})

Promise.all([promiseApi.userReg(), promiseApi.userAuth(), promiseApi.userData()])
	.then((res) => { console.log('all done', res) })
	.catch((err) => console.log(err)); */

/* promiseApi.userReg().then(
	function(user){
		console.log(user);
		promiseApi.userAuth(user.id).then(
			function(session){
				console.log(session);
				promiseApi.userData(session.token).then( 
					function(data){
						console.log(data);
					},
					function(err){
						console.log(err)
					}
				)
			},
			function(err){
				console.log(err)
			}
		)
	}, 
	function(err){
		console.log(err)
	}
) */

/* badApi.userReg(
	function(user){
		console.log(user);
		badApi.userAuth(user.id, 
			function(session){
				console.log(session);
				badApi.userData(session.token, 
					function(data){
						console.log(data);
					},
					function(err){
						console.log(err)
					}
				)
			},
			function(err){
				console.log(err)
			}
		)
	}, 
	function(err){
		console.log(err)
	}
);

let i = 0;

function checkDone(){
	if(i === 3){
		console.log('done')
	}
	else{
		console.log('wait...')
	}
}

badApi.userReg(function(user){ i++; checkDone(); })
badApi.userAuth(1, function(user){ i++; checkDone(); })
badApi.userData(1, function(user){ i++; checkDone(); }) */

/*
	pending
	resolved
	rejected
*/

/* function getNumber(onSuccess, onError){
	window.setTimeout(() => {
		let num = Math.random();
		num >= 0.5 ? onSuccess(num) : onError('less than 0.5');
	}, 500);
}

getNumber((val) => {
	console.log(val);
}, (err) => {
	console.log(err);
});

function getNumberPr(){
	return new Promise((resolve, reject) => {
		window.setTimeout(() => {
			let num = Math.random();
			num >= 0.5 ? resolve(num) : reject('less than 0.5');
		}, 1500);
	});
}

getNumberPr()
	.then((val) => {
		console.log(val);
	})
	.catch((err) => {
		console.log(err);
	}) 

function lazyMult(x, y){
	return new Promise((res, rej) => {
		window.setTimeout(() => {
			res(x * y);
		}, 1500);
	})
}

getNumberPr()
	.then(val => lazyMult(val, 2))
	.then(val => Math.max(val, 1.5))
	.then(console.log)
*/
//fetch('a').then(response => response.json()).then(data => {})