import * as ArticlesModel from './articles';


ArticlesModel.all()
.then(articles => {
	console.log(articles);
	console.log('articles count = ' + articles.length);
	let ind = Math.floor(Math.random() * articles.length);
	console.log('select index ' + ind + ', id = ' + articles[ind].id);
	return ArticlesModel.one(articles[ind].id);
})
.then(article => {
	console.log(article);
	let t = +(new Date());
	return ArticlesModel.update(article.id, article.title + ' ' + t, article.content).then(res => {
		return {
			res,
			id: article.id
		}
	});
})
.then(res => {
	console.log(res);
	return ArticlesModel.remove(res.id);
})
.then(res => {
	console.log(res);
	let t = +(new Date());
	return ArticlesModel.add(`New title ${t}`, `New content ${t}`);
})
.then(res => {
	console.log(res);
	return ArticlesModel.add(``, `New content`);
})
.then(res => {
	console.log(res);
})
.catch(e => {
	console.log(e);
});

/* ArticlesModel
.all()
.then((articles) => {
	console.log('articles count = ' + articles.length);
	let ind = Math.floor(Math.random() * articles.length);
	console.log('select index ' + ind + ', id = ' + articles[ind].id)

	return ArticlesModel.one(articles[ind].id);
})
.then((article) => {
	console.log(article)

	return ArticlesModel.add('New art', 'Some' + Math.random());
})
.then(resAdd => {
	console.log(resAdd);
	return ArticlesModel.update(resAdd.id, 'New art + up', 'updated').then(res => ({res, id: resAdd.id}));
})
.then(data => {
	return ArticlesModel.remove(data.id);
})
.then(console.log)
.catch(console.warn) */