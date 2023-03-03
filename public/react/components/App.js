import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);

	//- Set the article data on state (a new piece of state)
	const [page, setPage] = useState();

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	// - Make a fetch request to the /wiki/:slug endpoint for the specific article.
	async function fetchPage(slug){
		try {
			const response = await fetch(`${apiURL}/wiki/${slug}`);
			const pageData = await response.json();
			setPage(pageData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);

	return (
		<main>	
      <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			<PagesList pages={pages} />
		</main>
	)
}