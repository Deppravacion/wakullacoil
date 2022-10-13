import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const productsData = [
	{
		name: 'Cable wire assemblies ',
		description: '',
		//  icon: iconStyle(BsFillShieldLockFill),
		src:'/images/product_test.jpg',
		imgClass: 'one',
	},
	{
		name: 'Coax forming',
		description: '',
		// icon: iconStyle(IoIosOptions),
		src:'/images/product_test.jpg',
		imgClass: 'two',
	},
	{
		name: 'Coaxial transformers',
		description: '',
		// icon: iconStyle(GrHostMaintenance),
		src:'/images/product_test.jpg',
		imgClass: 'three',
	},
	{
		name: 'Couplers',
		description: '',
		// icon: iconStyle(BiSupport),
		src:'/images/product_test.jpg',
		imgClass: 'four',
	},
	{
		name: 'Baluns',
		description: '',
		// image: '/public/assets/products/product5.jpg',
		// icon: iconStyle(BiDollar),
		src:'/images/product_test.jpg',
		imgClass: 'five',
	},
	{
		name: 'Prototype assemblies',
		description: ' ',
		// icon: iconStyle(AiOutlineCloudUpload),
		src:'/images/product_test.jpg',
		imgClass: 'six',
	},
	{
		name: 'Air coils',
		description: '',
		// icon: iconStyle(BiSupport),
		src:'/images/product_test.jpg',
		imgClass: 'seven',
	},
	{
		name: 'Inductor/Toroidal coils ',
		description: '',
		// image: '/public/assets/products/product5.jpg',
		// icon: iconStyle(BiDollar),
		src:'/images/product_test.jpg',
		imgClass: 'eight',
	},
	{
		name: 'Test station wiring',
		description: ' ',
		// icon: iconStyle(AiOutlineCloudUpload),
		src:'/images/product_test.jpg',
		imgClass: 'nine',
	},
	{
		name: 'Thru hole and SMT',
		description: '',
		// icon: iconStyle(BiSupport),
		src:'/images/product_test.jpg',
		imgClass: 'ten',
	},
	{
		name: 'Hairpin Inductor ',
		description: '',
		// icon: '/public/assets/products/product5.jpg',
		// icon: iconStyle(BiDollar),
		src:'/images/product_test.jpg',
		imgClass: 'eleven',
	},
	{
		name: 'Jumper wire',
		description: ' ',
		// icon: iconStyle(AiOutlineCloudUpload),
		src:'/images/product_test.jpg',
		imgClass: 'twelve',
	},
];
