import React, {useEffect, useState} from 'react';
import axios from "../../axios";
import Card from '@material-ui/core/Card';
import classes from './Home.module.scss';

const Home = () => {
	const [joke, setJoke] = useState("");

	useEffect(() => {
		axios.get('https://sv443.net/jokeapi/v2/joke/Any?type=single')
			.then(res => {
				setJoke(res.data);
			})
			.catch(() => {

			});
	}, []);

	if (joke) {
		return <Card className={classes.JokeCard}>
			<h2>Joke of a day {joke.date}</h2>
			<p>{joke.joke}</p>
		</Card>;
	}
	return (
		<div>
			No jokes for today.
		</div>
	);
};

export default Home;
