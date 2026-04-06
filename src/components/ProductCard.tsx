import { Link } from 'react-router-dom'
import type { ProductType } from '../types/ProductTypes'

type LinkType = {
	productLink: string
} & ProductType

function ProductCard({
	productName,
	productDescription,
	priceView,
	imagePublicId,
	productLink,
}: LinkType) {
	const image = imagePublicId
		? `https://res.cloudinary.com/dv2z56dp9/image/upload/${imagePublicId}`
		: 'https://via.placeholder.com/300x200?text=No+Image'

	return (
		<div className="border-border h-full rounded-sm border bg-white shadow-md duration-200 ease-in-out hover:scale-105 hover:shadow-lg">
			<div className="border-border h-64 w-full border-b">
				<img
					src={image}
					alt="Foto do produto"
					className="h-full w-full object-contain object-center"
				/>
			</div>
			<div className="flex flex-1 flex-col gap-2 p-5">
				<div className="flex-1">
					<h1 className="text-title text-xs font-bold md:text-lg">
						{productName}
					</h1>
					<p className="text-subtitle line-clamp-4 text-xs wrap-break-word md:text-lg">
						{productDescription}
					</p>
				</div>

				<div>
					<hr className="my-5 border-t-2 border-gray-100" />
					<div className="flex items-center justify-between">
						<span className="text-title text-md font-bold md:text-2xl">
							R$ {priceView}
						</span>

						<Link
							to={productLink}
							className="bg-contrast hover:bg-contrast/90 w-2/5 cursor-pointer rounded-sm p-1 text-xs text-white duration-200 ease-in-out md:p-2 md:text-lg">
							Detalhes
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
