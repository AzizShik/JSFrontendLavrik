import { server } from './server';

async function login(login, password){
	let response = await server.post('auth.php', { login, password });
	return response.data;
}

export { login };