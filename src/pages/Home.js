import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content';
import Products from '../components/Products/Products'
import Hero from '../components/Hero/Hero';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';

// Hero Feature Content Carousel

const Home = () => {
	return (
		<>
			<Hero />
			{/* <Features /> */}
			<Content {...heroTwo} />
			<Products />
			{/* <Content {...heroOne} /> */}
			{/* <Content {...heroThree} /> */}
			<Carousel />
		</>
	);
};

export default Home;