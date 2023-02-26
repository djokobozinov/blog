type Props = {
	tags: string;
};
export default function Tags({ tags }: Props) {
	return (
		<div className='flex'>
			{tags &&
				tags.length > 0 &&
				tags.split(',').map((tag, index) => {
					return (
						tag && (
							<div
								key={index}
								className='flex h-6 justify-center items-center border border-gray-600 text-gray-600 rounded-lg text-[10px] font-medium px-2 mr-2 my-2'
							>
								{tag}
							</div>
						)
					);
				})}
		</div>
	);
}
