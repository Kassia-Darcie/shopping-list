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
