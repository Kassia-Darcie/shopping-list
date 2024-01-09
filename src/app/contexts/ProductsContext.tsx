import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useReducer,
	useState,
} from 'react';
import { ProductType } from '../types/ProductType';
import { ProductsAction, productsReducer } from '@/reducers/productsReducer';

type ProductsContextType = {
	budget: number;
	setBudget: Dispatch<SetStateAction<number>>;
	products: ProductType[];
	dispatch: Dispatch<ProductsAction>;
};

export const ProductsContext = createContext<ProductsContextType | null>(null);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
	const [budget, setBudget] = useState(0);
	const [products, dispatch] = useReducer(productsReducer, []);
	return (
		<ProductsContext.Provider value={{ budget, setBudget, products, dispatch }}>
			{children}
		</ProductsContext.Provider>
	);
};

export const useProducts = () => useContext(ProductsContext);
