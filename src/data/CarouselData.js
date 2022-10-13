export const data = [
	{
		title: 'How is your product different from your competitors?',
		description:
			'Every component produced by us is handmade from start to finish and inspected several times before leaving our facility.',
		image: './assets/products/product1.jpg',
	},
	{
		title: 'Is it possible to have a component made exactly according to our sample? ',
		description: 'Yes, if an actual sample is provided, we can analyze it and reproduce it.',
		image: './assets/products/product2.jpg',
	},
	{
		title: 'Do you have a product catalog?',
		description: 'No. We manufacture from scratch according to a client’s sample or specifications and drawings.',
		image: './assets/products/product3.jpg',
	},
	{
		title: 'Can you make different shapes of your product list, that may be required?',
		description: 'Yes. We have a machinist on hand to build any fixtures/measuring devices required to ensure your specifications are met.',
		image: './assets/products/product4.jpg',
	},
	{
		title: 'How can I request a quote?',
		description: 'Email us at WakullaCoil@gmail.com or call 850-597-3119',
		image: './assets/products/product5.jpg',
	},
	{
		title: 'What information is necessary for requesting a quote?',
		description:
			'Please provide detailed specifications or drawings, usage, condition, etc. If information is not sufficient, we have a contract engineer that can contact you to discuss/propose specifications..',
		image: './assets/products/product1.jpg',
	},
	{
		title: 'What are your lead times? ',
		description: 'Our average lead time is 15 to 30 days for quantities up to 10,000pc.',
		image: './assets/products/product2.jpg',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
