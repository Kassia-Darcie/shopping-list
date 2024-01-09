import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	onClick?: () => void;
	className?: string;
};

export const Button = ({ children, onClick, className }: Props) => {
	return (
		<button
			className={`bg-blue-500 hover:bg-blue-600 text-white h-8 py-1 px-6 rounded-full ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
