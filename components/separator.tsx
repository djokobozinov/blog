type Props = {
	title: string;
};
export default function Separator({ title }: Props) {
	return (
		<div className='mb-2 mt-8'>
			<div className='h-[1px] bg-gray-300 mt-4 mb-2'></div>
			<div className='font-semibold'>{title}</div>
		</div>
	);
}
