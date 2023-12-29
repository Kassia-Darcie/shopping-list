type ProductType = {
	id: number;
	name: string;
	checked: boolean;
	price: number;
	priority: number;
};

type ProductPropsType = {
	product: ProductType;
};
type ProductListPropsType = {
	products: ProductType[];
};

const produto: ProductType = {
	id: 1,
	name: 'Produto teste',
	checked: false,
	price: 10000,
	priority: 3,
};

export const ProductList = () => {
	//{ products }: ProductListPropsType
	return (
		<ul className="mx-auto mt-8">
			<Product product={produto} />
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
export const PriorityTag = ({ priority }: { priority: number }) => {
	let priorityContent;
	let priorityColor;

	switch (priority) {
		case 1:
			priorityContent = 'urgente';
			priorityColor = 'bg-red-300 text-red-800';
			break;
		case 2:
			priorityContent = 'normal';
			priorityColor = 'bg-yellow-100 text-yellow-800';
			break;
		case 3:
			priorityContent = 'supérfluo';
			priorityColor = 'bg-blue-300 text-blue-700';
			break;
	}
	return (
		<div className={`${priorityColor} text-[0.5rem] py-1 px-2 rounded-full`}>
			{priorityContent}
		</div>
	);
};
