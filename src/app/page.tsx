import { Budge } from './components/Budge';
import { FormAddProduct } from './components/FormAddProduct';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';

export default function Home() {
	return (
		<>
			<Header />
			<div className="container mx-auto px-4 py-8">
				<Budge />
				<div className="lg:max-w-3xl mx-auto">
					<FormAddProduct />
					<ProductList />
				</div>
			</div>
		</>
	);
}
