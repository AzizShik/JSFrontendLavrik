import "regenerator-runtime/runtime.js";
import * as ArticlesModel from './articles';
import * as AuthModel from './auth';

window.addEventListener('load', function(){
	let form = document.querySelector('.authForm');
	let fieldLogin = form.querySelector('[name=login]');
	let fieldPass = form.querySelector('[name=password]');
	let formErrors = form.querySelector('.authForm__errors');
	let getAllBtn = document.querySelector('.getAll');
	let atrList = document.querySelector('.list');

	form.addEventListener('submit', async function(e){
		e.preventDefault();
		let response = await AuthModel.login(fieldLogin.value, fieldPass.value);
		
		if(response.res){
			localStorage.setItem('auth__token', response.token);
			localStorage.setItem('auth__userName', response.name);
			localStorage.setItem('auth__expire', response.expire);
			showHello();
		}
		else{
			formErrors.innerHTML = '<p>' + response.errors.join('</p><p>')  + '</p>';
		}
	});

	getAllBtn.addEventListener('click', async function(){
		let articles = await ArticlesModel.all();
		atrList.innerHTML = '';

		articles.forEach(art => {
			let div = document.createElement('div');
			let p = document.createElement('p');
			p.classList.add('removeArt');
			p.setAttribute('data-id', art.id_article);
			p.innerHTML = art.title;
			div.appendChild(p);
			atrList.appendChild(div);
		});

	});

	atrList.addEventListener('dblclick', async function(e){
		if(e.target.classList.contains('removeArt')){
			let id = e.target.dataset.id;
			let response = await ArticlesModel.remove(id);

			if(response.res){
				let div = e.target.parentNode;
				div.parentNode.removeChild(div);
			}
			else{
				alert(response.errors)
			}
		}
	});

	function showHello(){
		let name = localStorage.getItem('auth__userName');
		form.innerHTML = `<h2>Hello, ${name}!</h2>`;
	}

	let token = localStorage.getItem('auth__token');

	if(token !== null){
		// auth/check
		showHello();
	}
});