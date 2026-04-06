import {
	ChevronRightIcon,
	ChevronDoubleRightIcon,
	ChevronLeftIcon,
	ChevronDoubleLeftIcon,
} from '@heroicons/react/24/outline'

type PaginationProps = {
	currentPage: number
	firstPage: number
	lastPage: number
	perPage: number
	total: number
	onPageChange: (page: number) => void
}

function Pagination({
	currentPage,
	firstPage,
	lastPage,
	perPage,

	total,
	onPageChange,
}: PaginationProps) {
	console.log('pagination data', {
		currentPage,
		firstPage,
		lastPage,
		perPage,
		total,
	})

	const nextPage = currentPage + 1
	const previousPage = currentPage - 1

	return (
		<div className="flex items-center justify-center gap-2">
			<button
				disabled={currentPage === firstPage}
				className="cursor-pointer rounded-sm border border-gray-300 p-2 text-sm shadow-md duration-200 ease-in-out hover:bg-gray-100 active:scale-90 disabled:cursor-not-allowed disabled:bg-gray-200"
				onClick={() => onPageChange(firstPage)}>
				<ChevronDoubleLeftIcon className="size-4" />
			</button>
			{/* --- */}
			<button
				disabled={currentPage === firstPage}
				className="cursor-pointer rounded-sm border border-gray-300 p-2 text-sm shadow-md duration-200 ease-in-out hover:bg-gray-100 active:scale-90 disabled:cursor-not-allowed disabled:bg-gray-200"
				onClick={() => onPageChange(previousPage)}>
				<ChevronLeftIcon className="size-4" />
			</button>
			<span className="text-sm">
				{currentPage} de {lastPage}
			</span>
			<button
				disabled={currentPage === lastPage}
				className="cursor-pointer rounded-sm border border-gray-300 p-2 text-sm shadow-md duration-200 ease-in-out hover:bg-gray-100 active:scale-90 disabled:cursor-not-allowed disabled:bg-gray-200"
				onClick={() => onPageChange(nextPage)}>
				<ChevronRightIcon className="size-4" />
			</button>
			{/* --- */}
			<button
				disabled={currentPage === lastPage}
				className="cursor-pointer rounded-sm border border-gray-300 p-2 text-sm shadow-md duration-200 ease-in-out hover:bg-gray-100 active:scale-90 disabled:cursor-not-allowed disabled:bg-gray-200"
				onClick={() => onPageChange(lastPage)}>
				<ChevronDoubleRightIcon className="size-4" />
			</button>
		</div>
	)
}

export default Pagination
