import server from './server';

async function all(){
	let response = await server.get('articles.php');
	return response.data;
}

async function one(id){
	let response = await server.get('articles.php', { params: { id } });
	return response.data;
}

async function add(title, content){
	let response = await server.post('articles.php', { title, content });
	return response.data;
}

async function update(id, title, content){
	let response = await server.put('articles.php', { id, title, content });
	return response.data;
}

async function remove(id){
	let response = await server.delete('articles.php', { params: { id } });
	return response.data;
}

export { all, one, add, update, remove }