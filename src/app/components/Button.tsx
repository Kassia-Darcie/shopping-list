import { ReactNode } from 'react';

export const Button = ({ children }: { children: ReactNode }) => {
	return (
		<button className="bg-blue-500 hover:bg-blue-600 text-white h-8 py-1 px-6 rounded-full">
			{children}
		</button>
	);
};
