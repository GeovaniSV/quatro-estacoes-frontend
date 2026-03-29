import { Link } from 'react-router-dom'
import type { ProductType } from '../types/ProductTypes'
import { useEffect, useState } from 'react'

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
	const [image, setImage] = useState<string>('')
	useEffect(() => {
		const handleImage = async (publicId: string) => {
			try {
				const productImage = await fetch(
					`https://res.cloudinary.com/dv2z56dp9/image/upload/${publicId}`,
				)
				setImage(productImage.url)
			} catch (error) {
				console.log(error)
			}
		}

		handleImage(imagePublicId)
	}, [])
	return (
		<div className="border-border h-auto rounded-sm border bg-white shadow-md duration-200 ease-in-out hover:scale-105 hover:shadow-lg">
			<div className="border-border w-full border-b">
				<img
					src={image}
					alt="Foto do produto"
					className="w-full object-cover"
				/>
			</div>
			<div className="flex flex-col gap-2 p-5">
				<h1 className="text-title text-xs font-bold md:text-lg">
					{productName}
				</h1>
				<p className="text-subtitle text-xs md:text-lg">{productDescription}</p>
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
	)
}

export default ProductCard
