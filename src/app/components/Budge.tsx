import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { useProducts } from '../contexts/ProductsContext';

export const Budge = () => {
	const productCtx = useProducts();
	const [editing, setEditing] = useState(false);
	const sumChecked: number = productCtx
		? productCtx?.products.reduce<number>((acc, current) => {
				if (current.checked === true) {
					return acc + current.price;
				}
				return acc;
		  }, 0)
		: 0;

	const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') setEditing(false);
	};
	return (
		<div>
			<h3 className="text-sm mb-1">Orçamento disponível</h3>

			<div className="flex gap-2">
				{!editing ? (
					<p className="text-4xl">
						R$ {productCtx && `${(productCtx.budget - sumChecked).toFixed(2)}`}
					</p>
				) : (
					<input
						type="number"
						className="text-4xl"
						value={productCtx?.budget}
						onChange={(e) => productCtx?.setBudget(Number(e.target.value))}
						onKeyUp={handleEnterKey}
					/>
				)}
				{!editing && (
					<FiEdit
						className="text-blue-500 hover:text-blue-600"
						size=".8rem"
						onClick={() => setEditing(true)}
					/>
				)}
			</div>
			<p>TOTAL: R$ {sumChecked.toFixed(2)}</p>
		</div>
	);
};
