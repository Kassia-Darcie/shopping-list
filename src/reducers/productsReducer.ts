import { ProductType } from '@/app/types/ProductType';

type AddAction = {
	type: 'add';
	payload: {
		name: string;
		priority: number;
	};
};

type EditPriceAction = {
	type: 'editPrice';
	payload: {
		id: string;
		price: number;
	};
};

type CheckAction = {
	type: 'check';
	payload: {
		id: string;
	};
};

export type ProductsAction = AddAction | EditPriceAction | CheckAction;

export const productsReducer = (
	products: ProductType[],
	action: ProductsAction
) => {
	switch (action.type) {
		case 'add':
			const product: ProductType = {
				id: crypto.randomUUID(),
				name: action.payload.name,
				priority: action.payload.priority,
				price: 0,
				checked: false,
			};
			return [...products, product];
		case 'editPrice':
			return products.map((product) =>
				product.id === action.payload.id
					? { ...product, price: action.payload.price }
					: product
			);
		case 'check':
			return products.map((product) =>
				product.id === action.payload.id
					? { ...product, checked: !product.checked }
					: product
			);
	}
};
