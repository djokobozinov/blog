import React from 'react';

type Props = {
	title: string;
};

export default function Separator({ title }) {
	return <div className='h-[1px] bg-gray-300 my-4'></div>;
}
