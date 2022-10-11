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
		description: 'description about product 1',
		// icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Coax forming',
		description: 'description about product',
		// icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Coaxial transformers',
		description: 'description about product',
		// icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: 'Couplers',
		description: 'description about product',
		// icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Baluns',
		description: 'description about product',
		// image: '/public/assets/products/product5.jpg',
		// icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Prototype assemblies',
		description:
			'description about product ',
		// icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
	{
		name: 'Air coils',
		description: 'description about product',
		// icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Inductor/Toroidal coils ',
		description: 'description about product',
		// image: '/public/assets/products/product5.jpg',
		// icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Test station wiring',
		description:
			'description about product ',
		// icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
	{
		name: 'Thru hole and SMT',
		description: 'description about product',
		// icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Hairpin Inductor ',
		description: 'description about product',
		// image: '/public/assets/products/product5.jpg',
		// icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Jumper wire',
		description:
			'description about product ',
		// icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
];
