'use client';
import { FormEvent, useState } from 'react';
import { Button } from './Button';
import { ProductType } from '../types/ProductType';

type Props = {
	onAddProduct: (product: ProductType) => void;
};

export const FormAddProduct = ({ onAddProduct }: Props) => {
	const [productName, setProductName] = useState<string>('');
	const [priority, setPriority] = useState<number>(2);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const product: ProductType = {
			id: crypto.randomUUID(),
			name: productName,
			priority,
			price: 0,
			checked: false,
		};
		onAddProduct(product);
	};
	return (
		<form
			className="w-full lg:w-8/12 flex gap-2 mx-auto my-4 justify-center items-end"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				className="lg:flex-1 bg-zinc-100 p-2 focus:outline-none border border-zinc-200 focus:border-zinc-400 rounded-lg"
				value={productName}
				onChange={(e) => setProductName(e.target.value)}
				placeholder="Nome do produto"
			/>
			<div className="flex flex-col">
				<label
					htmlFor="priority"
					className="text-xs font-light"
				>
					Prioridade
				</label>
				<select
					className="bg-zinc-100 p-2 text-xs"
					name="priority"
					id="priority"
					value={priority}
					onChange={(e) => setPriority(Number(e.target.value))}
				>
					<option value="1">Urgente</option>
					<option value="2">Normal</option>
					<option value="3">Supérfluo</option>
				</select>
			</div>
			<Button>Add</Button>
		</form>
	);
};
