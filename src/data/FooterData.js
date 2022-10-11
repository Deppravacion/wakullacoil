import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube),
	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
	},
];

export const footerData = [
	{
		title: 'Main',
		links: ['Home', 'FAQs', 'About us', 'Contact'],
	},
	{
		title: 'Products',
		links: ['Category1', 'Category2', 'Category3','Category4'],
	},
	// {
	// 	title: 'Press',
	// 	links: ['Logos', 'Events', 'Stories', 'Office'],
	// },
	{
		title: 'Legal',
		links: ['GDPR', 'Privacy Policy', 'Terms of Service', 'Disclaimer'],
	},
];
