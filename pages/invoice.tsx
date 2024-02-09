import { useState } from 'react';

export default function Invoice() {
	const [id, setId] = useState('');
	const [amount, setAmount] = useState('');
	const [date, setDate] = useState('');
	const [dateOfService, setDateOfService] = useState('');
	const [bankAccount, setBankAccount] = useState('');
	const [swift, setSwift] = useState('');
	const [billedToName, setBilledToName] = useState('');
	const [billedToAddress, setBilledToAddress] = useState('');
	const [billedToCity, setBilledToCity] = useState('');
	const [billedToCountry, setBilledToCountry] = useState('');

	const myAccounts = [
		{ name: 'Select Account', bankAccount: '', swift: '' },
		{
			name: 'Wise',
			bankAccount: 'BE37 9674 7859 4528',
			swift: 'TRWIBEB1XXX',
		},
		{
			name: 'Gorenska',
			bankAccount: 'SI56 0765 1721 3785 053',
			swift: 'GORESI2X',
		},
	];

	const customers = [
		{ name: 'Select Customer', address: '', city: '', country: '' },
		{
			name: 'Otherdex Inc.',
			address: '1810 SE 2nd st.',
			city: 'Deerfield Beach, Florida 33441',
			country: 'United States',
		},
		{
			name: 'ZuluNest',
			address: '140 N. Victory Blvd #104',
			city: 'Burbank, California 91502',
			country: 'United States',
		},
	];

	function printDiv(divId) {
		const printContents = document.getElementById(divId).innerHTML;
		const originalContents = document.body.innerHTML;
		document.body.innerHTML = printContents;
		window.print();
		document.body.innerHTML = originalContents;
		window.location.reload();
	}

	return (
		<div className='flex flex-col w-full justify-center items-center my-10 gap-3'>
			<div className='flex w-full px-10 gap-2 justify-center'>
				<input
					placeholder='Number'
					className='border border-gray-300 p-2 rounded-md'
					onChange={(e) => {
						setId(e.target.value);
					}}
				/>
				<input
					placeholder='Amount'
					className='border border-gray-300 p-2 rounded-md'
					onChange={(e) => {
						setAmount(e.target.value);
					}}
				/>
				<input
					placeholder='Date'
					className='border border-gray-300 p-2 rounded-md'
					onChange={(e) => {
						setDate(e.target.value);
					}}
				/>
				<input
					placeholder='Date of Service'
					className='border border-gray-300 p-2 rounded-md'
					onChange={(e) => {
						setDateOfService(e.target.value);
					}}
				/>
				<select
					className='border border-gray-300 p-2 rounded-md'
					name='Customers'
					onChange={(e) => {
						const selectedCustomer = e.target.value;
						const customer = customers.find((c) => c.name === selectedCustomer);
						setBilledToName(customer.name);
						setBilledToAddress(customer.address);
						setBilledToCity(customer.city);
						setBilledToCountry(customer.country);
					}}
				>
					{customers.map((c) => {
						return <option value={c.name}>{c.name}</option>;
					})}
				</select>
				<select
					className='border border-gray-300 p-2 rounded-md'
					name='Accounts'
					onChange={(e) => {
						const selectedAccount = e.target.value;
						const account = myAccounts.find((account) => account.name === selectedAccount);
						setBankAccount(account.bankAccount);
						setSwift(account.swift);
					}}
				>
					{myAccounts.map((account) => {
						return <option value={account.name}>{account.name}</option>;
					})}
				</select>
				<button
					className='bg-gray-900 text-white p-2 rounded-md'
					onClick={() => {
						printDiv('invoicePaper');
					}}
				>
					Generate
				</button>
			</div>
			<div className='w-full border h-[1px]'></div>
			<div id='invoicePaper' className='flex flex-col w-[800px] gap-1 border p-10 text-sm'>
				<div className='flex w-full justify-between items-center'>
					<h1 className='text-2xl font-bold'>Invoice</h1>
					<img src={'/images/logo.png'} className='w-[70px] rounded-full'></img>
				</div>
				<div className='flex w-full mt-5'>
					<h2 className='text-gray-600 uppercase'>Invoice Number: 2024-{id}</h2>
				</div>
				<div className='flex w-full'>
					<p className='text-gray-600 uppercase'>Date of issue: {date}</p>
				</div>
				<div className='flex flex-col w-full items-end mt-5'>
					<p className='text-sm font-semibold'>Računalniško programiranje Gjoko Bozhinov, s.p.</p>
					<p className='text-gray-600'> Čeplje 70D, 3305 Vransko, Slovenia</p>
					<p className='text-gray-600'>VAT reg. no.: 84143991</p>
				</div>
				<div className='flex flex-col w-full items-end mt-5'>
					<p className='text-base font-semibold'>BANK ACCOUNT</p>
					<p className='text-gray-600'>IBAN: {bankAccount}</p>
					<p className='text-gray-600'>SWIFT/BIC: {swift}</p>
				</div>
				<div className='flex flex-col w-full mt-5 text-base'>
					<p className='text-base font-semibold uppercase'>Billed to</p>
					<p className='text-gray-600'>{billedToName}</p>
					<p className='text-gray-600'>{billedToAddress}</p>
					<p className='text-gray-600'>{billedToCity}</p>
					<p className='text-gray-600'>{billedToCountry}</p>
				</div>
				<div className='flex flex-col w-full mt-5 text-base'>
					<p className='text-base font-semibold uppercase'>Date of service</p>
					<p className='text-gray-600'>{dateOfService}</p>
				</div>
				<div className='flex flex-col w-full bg-gray-200 p-2'>
					<div className='flex items-center justify-between border-b border-gray-700 h-10 uppercase font-semibold'>
						<p>Description</p>
						<p>Amount</p>
					</div>
					<div className='flex items-center h-10 justify-between'>
						<p>Software Development</p>
						<p>{amount}€</p>
					</div>
					<div className='flex flex-col items-end w-full text-xs'>
						<span>SUBTOTAL: {amount}€</span>
						<span>{'VAT RATE (0%)'}</span>
						<span>{'VAT 0,0'}</span>
					</div>
				</div>
				<div className='flex mt-10 px-5 justify-between'>
					<div className='flex flex-col'>
						<p>Invoice Total</p>
						<p className='font-semibold text-2xl'>{amount}€</p>
						<p className='text-[10px] text-gray-500'>*VAT exempt under article 287 of VAT Directive </p>
					</div>
					<div className='flex flex-col'>
						<p> INVOICE ISSUED BY</p>
						<img src={'/images/sssss_gjoko.png'} className='w-[100px]'></img>
					</div>
				</div>
			</div>
		</div>
	);
}
