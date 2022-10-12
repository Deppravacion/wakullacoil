import React from 'react';
import {Img} from './AboutUsStyles.js';
import { Button, Heading, TextWrapper } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
	PricingSection,
	PricingWrapper,
	PricingContainer,
	PricingCardInfo,
	PricingCardPlan,
	PricingCardCost,
	PricingCardFeatures,
	PricingCardText,
	PricingCardFeature,
	PricingCard,
} from './AboutUsStyles';
import { aboutUsData } from '../../data/AboutUsData';

function Pricing() {
	return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
			<PricingSection id="pricing">
				<PricingWrapper>
					<Heading>About us</Heading>

					<TextWrapper
						mt="1.1rem"
						mb="2.5rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						"A satisfied customer is the best business strategy of all" – Michael LeBoeuf
					</TextWrapper>
					<div>
					<Img src='/images/owner.jfif' style={{margin:'15px',  
					border: '3.5px solid #242424'}}/>
					</div>
					<PricingContainer>
						{aboutUsData.map((card, index) => (
							<PricingCard key={index}>
								<PricingCardInfo>
								{/* <PricingCardCost>Wakulla Coil LLC</PricingCardCost>
									<PricingCardText>
									 is a female owned 
									and family-operated company with 24 
									years of excellence. We demand perfection.
									</PricingCardText> */}
									{/* <PricingCardPlan>{card.title}</PricingCardPlan> */}
									<PricingCardCost>{card.price}</PricingCardCost>
									<PricingCardText>{card.description}</PricingCardText>
									{/* <PricingCardFeatures>
										{card.features.map((feature, index) => (
											<PricingCardFeature key={index}>
												{feature}
											</PricingCardFeature>
										))}
									</PricingCardFeatures> */}
									{/* <Button>Get Started</Button> */}
								</PricingCardInfo>
							</PricingCard>
						))}
					</PricingContainer>
				</PricingWrapper>
			</PricingSection>
		</IconContext.Provider>
	);
}
export default Pricing;