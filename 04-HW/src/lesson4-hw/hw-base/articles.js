// 50537266ded1d3eb1e6923f7f4b2f484

function makeRequest(url, options = {}, baseURL = '/js-hw-api/'){
	if(!('headers' in options)){
		options.headers = {};
	}
	
	options.headers.Autorization = '50537266ded1d3eb1e6923f7f4b2f484';

	return fetch(baseURL + url, options).then(response => {
		if(response.status === 200){
			return response.json();
		}

		return response.text().then(text => {
			throw new Error(text);
		});
	});
}

function all(){
	return makeRequest('articles.php');
}

function one(id){
	return makeRequest(`articles.php?id=${id}`);
}

function add(title, content){
	let body = new FormData();
	body.append('title', title);
	body.append('content', content);

	return makeRequest(`articles.php`, {
		method: 'POST',
		body
	});
}

function update(id, title, content){
	return makeRequest(`articles.php`, {
		method: 'PUT',
		body: JSON.stringify({ id, title, content })
	});
}

function remove(id){
	return makeRequest(`articles.php?id=${id}`, {
		method: 'DELETE'
	});
}

export { all, one, add, update, remove }