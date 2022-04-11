import "regenerator-runtime/runtime.js";
import * as ArticlesModel from './articles';

async function runTests(){
	try{
		let articles = await ArticlesModel.all();
		console.log('articles count = ' + articles.length);
		let ind = Math.floor(Math.random() * articles.length);
		console.log('select index ' + ind + ', id = ' + articles[ind].id);

		let article = await ArticlesModel.one(articles[ind].id);
		console.log(article);
		let t = +(new Date());
		
		let updateRes = await ArticlesModel.update(article.id, article.title + ' ' + t, article.content);
		console.log(updateRes);
	}
	catch(e){
		console.log('err in async f');
		console.warn(e);
	}
};

//runTests().catch(console.warn);
runTests();

