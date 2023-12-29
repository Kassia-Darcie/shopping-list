import { ProductType } from '../types/ProductType';
import { PriorityTag } from './PriorityTag';

type ProductPropsType = {
	product: ProductType;
};
type ProductListPropsType = {
	products: ProductType[];
};

export const ProductList = ({ products }: ProductListPropsType) => {
	return (
		<ul className="flex flex-col gap-y-2 mx-auto mt-8">
			{products.map((product) => (
				<Product
					product={product}
					key={product.id}
				/>
			))}
		</ul>
	);
};

export const Product = ({ product }: ProductPropsType) => {
	return (
		<li className="flex justify-between items-end">
			<span className="flex flex-1 items-center text-2xl">
				<input
					type="checkbox"
					className="mr-4 size-6"
				/>
				{product.name}
			</span>

			<div className="text-lg mr-4">
				R${' '}
				<input
					className="w-24 outline-none"
					type="text"
					value={product.price.toFixed(2)}
				/>
			</div>
			<PriorityTag priority={product.priority} />
		</li>
	);
};
