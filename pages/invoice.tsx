export default function Invoice() {
	const invoice = {
		id: 4,
		date: '2021-01-01',
		bankAccount: 'BE37 9674 7859 4528',
		swift: 'TRWIBEB1XXX',
		billedToName: 'Otherdex Inc.',
		billedToAddress: '1810 SE 2nd st.',
		billedToCity: 'Deerfield Beach, Florida 33441',
		billedToCountry: 'United States',
		dateOfService: '2021-01-01',
		amount: 1000,
	};

	return (
		<div className='flex flex-col w-full justify-center items-center mt-10'>
			<div className='flex flex-col w-[800px] gap-1 border p-10 text-sm'>
				<div className='flex w-full'>
					<h1 className='text-3xl font-bold'>Invoice</h1>
				</div>
				<div className='flex w-full mt-5'>
					<h2 className='text-gray-600 uppercase'>Invoice Number: 2024-{invoice.id}</h2>
				</div>
				<div className='flex w-full'>
					<p className='text-gray-600 uppercase'>Date of issue: {invoice.date}</p>
				</div>
				<div className='flex flex-col w-full items-end mt-10'>
					<p className='text-base font-semibold'>Računalniško programiranje Gjoko Bozhinov, s.p.</p>
					<p className='text-gray-600'> Čeplje 70D, 3305 Vransko, Slovenia</p>
					<p className='text-gray-600'>VAT reg. no.: 84143991</p>
				</div>
				<div className='flex flex-col w-full items-end mt-5'>
					<p className='text-base font-semibold'>BANK ACCOUNT</p>
					<p className='text-gray-600'>IBAN: {invoice.bankAccount}</p>
					<p className='text-gray-600'>SWIFT/BIC: {invoice.swift}</p>
				</div>
				<div className='flex flex-col w-full mt-5 text-base'>
					<p className='text-base font-semibold uppercase'>Billed to</p>
					<p className='text-gray-600'>{invoice.billedToName}</p>
					<p className='text-gray-600'>{invoice.billedToAddress}</p>
					<p className='text-gray-600'>{invoice.billedToCity}</p>
					<p className='text-gray-600'>{invoice.billedToCountry}</p>
				</div>
				<div className='flex flex-col w-full mt-5 text-base'>
					<p className='text-base font-semibold uppercase'>Date of service</p>
					<p className='text-gray-600'>{invoice.dateOfService}</p>
				</div>
				<div className='flex flex-col w-full bg-gray-200 p-2'>
					<div className='flex items-center justify-between border-b border-gray-700 h-10 uppercase font-semibold'>
						<p>Description</p>
						<p>Amount</p>
					</div>
					<div className='flex items-center h-10 justify-between'>
						<p>Software Development</p>
						<p>{invoice.amount}€</p>
					</div>
				</div>
				<div className='flex mt-10 px-5'>
					<div className='flex flex-col'>
						<p>Invoice Total</p>
						<p className='font-semibold text-2xl'>{invoice.amount}€</p>
					</div>
					<div className='flex flex-col'>
						<p> INVOICE ISSUED BY</p>
						<img></img>
					</div>
				</div>
			</div>
		</div>
	);
}
