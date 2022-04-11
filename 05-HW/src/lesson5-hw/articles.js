import { server, serverWithAuth } from './server';

async function all(){
	let response = await server.get('articles.php');
	return response.data;
}

async function remove(id){
	let response = await serverWithAuth.delete('articles.php', { params: { id } });
	return response.data;
}

export { all, remove }