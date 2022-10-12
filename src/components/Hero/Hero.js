import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" playsInline autoPlay muted loop style={{filter: 'blur(5px)', pointerEvents: 'none'}}/>
			<Container>
				<MainHeading>Wakulla coil</MainHeading>
				<HeroText>
				Made to order...
				</HeroText>
				<ButtonWrapper>
					<Link to="contact">
						<Button>Let's talk now</Button>
					</Link>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;