import { useState } from 'react';
import { useProducts } from '../contexts/ProductsContext';
import { ProductType } from '../types/ProductType';
import { PriorityTag } from './PriorityTag';
import { FiEdit } from 'react-icons/fi';

type ProductPropsType = {
	product: ProductType;
};

export const ProductList = () => {
	const productsCtx = useProducts();
	return (
		<ul className="flex flex-col gap-y-2 mx-auto mt-16 mb-8 w-full">
			{productsCtx?.products.map((product) => (
				<Product
					product={product}
					key={product.id}
				/>
			))}
		</ul>
	);
};

export const Product = ({ product }: ProductPropsType) => {
	const productsCtx = useProducts();
	const [price, setPrice] = useState(0);
	const [editing, setEditing] = useState(false);

	const handleCheck = () => {
		productsCtx?.dispatch({ type: 'check', payload: { id: product.id } });
	};

	const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			setEditing(false);
			productsCtx?.dispatch({
				type: 'editPrice',
				payload: { id: product.id, price },
			});
		}
	};
	return (
		<li className="flex justify-between items-end">
			<span className="flex flex-1 items-center text-2xl">
				<input
					type="checkbox"
					className="mr-4 size-6"
					checked={product.checked}
					onChange={handleCheck}
				/>
				{product.name}
			</span>

			<div className="text-lg mr-4 flex gap-1">
				R${' '}
				{!editing ? (
					<p className="text-lg">{product.price.toFixed(2)}</p>
				) : (
					<input
						type="number"
						className="w-24 outline-none"
						value={price}
						onChange={(e) => setPrice(Number(e.target.value))}
						onKeyUp={handleEnterKey}
					/>
				)}
				{!editing && (
					<FiEdit
						className="text-blue-500 hover:text-blue-600"
						size=".6rem"
						onClick={() => setEditing(true)}
					/>
				)}
			</div>
			<PriorityTag priority={product.priority} />
		</li>
	);
};
