'use client';
import { useState } from 'react';
import { Budge } from './components/Budge';
import { FormAddProduct } from './components/FormAddProduct';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { ProductType } from './types/ProductType';
import { ProductsProvider } from './contexts/ProductsContext';
import { Button } from './components/Button';

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
	const [addForm, setAddForm] = useState(false);

	const handleAddNew = () => {
		setAddForm((a) => !a);
	};

	return (
		<ProductsProvider>
			<Header />
			<div className="container mx-auto px-4 py-8">
				<Budge />
				<div className="lg:max-w-3xl mx-auto flex flex-col items-center">
					<ProductList />
					{addForm && <FormAddProduct setAddForm={setAddForm} />}

					{!addForm && (
						<Button
							className="mx-auto"
							onClick={handleAddNew}
						>
							Adicionar novo
						</Button>
					)}
				</div>
			</div>
		</ProductsProvider>
	);
}
