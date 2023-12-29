'use client';
import { useState } from 'react';
import { Budge } from './components/Budge';
import { FormAddProduct } from './components/FormAddProduct';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { ProductType } from './types/ProductType';

const initialProducts: ProductType[] = [
	{
		id: '1',
		name: 'Produto teste',
		checked: false,
		price: 10000,
		priority: 3,
	},
];

export default function Home() {
	const [products, setProducts] = useState<ProductType[]>(initialProducts);

	const handleAddProduct = (product: ProductType) => {
		setProducts((p) => [...p, product]);
	};

	return (
		<>
			<Header />
			<div className="container mx-auto px-4 py-8">
				<Budge />
				<div className="lg:max-w-3xl mx-auto">
					<FormAddProduct onAddProduct={handleAddProduct} />
					<ProductList products={products} />
				</div>
			</div>
		</>
	);
}
