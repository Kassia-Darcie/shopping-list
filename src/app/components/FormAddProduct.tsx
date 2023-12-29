import { Button } from './Button';

export const FormAddProduct = () => {
	return (
		<form className="w-full lg:w-8/12 flex gap-2 mx-auto my-4 justify-center items-end">
			<input
				type="text"
				className="lg:flex-1 bg-zinc-100 p-2 focus:outline-none border border-zinc-200 focus:border-zinc-400 rounded-lg"
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
