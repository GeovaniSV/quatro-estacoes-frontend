import type { ProductType } from '../types/ProductTypes'
import { useEffect, useState } from 'react'

function ProductCard({
	productName,
	productDescription,
	priceView,
	imagePublicId,
	productPrice,
}: ProductType) {
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
		<main className="border-border h-auto max-w-50 rounded-sm border bg-white shadow-md duration-200 ease-in-out hover:scale-105 hover:shadow-lg md:max-w-xs">
			<div className="border-border w-full border-b">
				<img
					src={image}
					alt="Foto do produto"
					className="h-30 w-full md:h-60"
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

					<button className="bg-contrast hover:bg-contrast/90 w-2/5 cursor-pointer rounded-sm p-1 text-xs text-white duration-200 ease-in-out md:p-2 md:text-lg">
						Detalhes
					</button>
				</div>
			</div>
		</main>
	)
}

export default ProductCard
