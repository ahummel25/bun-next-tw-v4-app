'use client'

import { useState } from 'react'
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable
} from '@tanstack/react-table'

interface User {
	id: number;
	name: string;
	email: string;
	company: { name: string };
}

const columnHelper = createColumnHelper<User>()

const columns = [
	columnHelper.accessor('id', {
		header: 'ID',
		cell: info => info.getValue(),
		size: 70
	}),
	columnHelper.accessor('name', {
		header: 'Name',
		cell: info => info.getValue(),
		size: 200
	}),
	columnHelper.accessor('email', {
		header: 'Email',
		cell: info => info.getValue(),
		size: 250
	}),
	columnHelper.accessor('company.name', {
		header: 'Company',
		cell: info => info.getValue(),
		size: 200
	})
]

export function UserTable({ data }: { data: User[] }) {
	const [sorting, setSorting] = useState<SortingState>([])

	const table = useReactTable({
		data,
		columns,
		state: { sorting },
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel()
	})

	return (
		<div className="overflow-x-auto">
			<table className="w-full border border-gray-300 bg-white">
				<thead>
					{table.getHeaderGroups().map(headerGroup => (
						<tr key={headerGroup.id} className="bg-gray-300 dark:bg-gray-400">
							{headerGroup.headers.map(header => (
								<th
									key={header.id}
									className="cursor-pointer px-4 py-2 text-left font-semibold"
									style={{ width: `${header.getSize()}px` }}
									onClick={header.column.getToggleSortingHandler()}
								>
									<div className="flex items-center">
										{flexRender(header.column.columnDef.header, header.getContext())}
										<span className="ml-1">
											{{
												asc: ' 🔼',
												desc: ' 🔽'
											}[header.column.getIsSorted() as string] ?? null}
										</span>
									</div>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map(row => (
						<tr key={row.id} className="bg-gray-400 hover:bg-gray-300 dark:bg-gray-500 hover:dark:bg-gray-400">
							{row.getVisibleCells().map(cell => (
								<td
									key={cell.id}
									className="border border-gray-300 px-4 py-2"
									style={{ width: `${cell.column.getSize()}px` }}
								>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}