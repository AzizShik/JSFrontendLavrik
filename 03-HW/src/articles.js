import * as serverApi from './db';

function parseResponse(response){
	try{
		let { data } = JSON.parse(response);
		return data;
	}
	catch{
		throw new Error('bad json');
	}
}

function decorateErrorPlace(place){
	return function(error){
		throw new Error(`server answer is not 200 in ${place}`);
	}
}

function all(){
	return serverApi.all().then(parseResponse).catch(decorateErrorPlace('art list'));
}

function one(id){
	return serverApi.get(id).then(parseResponse).catch(decorateErrorPlace('art one'));
}

function remove(id){
	return serverApi.remove(id).then(parseResponse).catch(decorateErrorPlace('art remove'));
}

export {all, one, remove};