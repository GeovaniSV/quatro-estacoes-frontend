import type { ButtonHTMLAttributes, Ref } from 'react'

type ButtonProps = {
	title: string
	typeField: 'contrast' | 'danger'
	className?: string
	ref?: Ref<HTMLButtonElement>
} & ButtonHTMLAttributes<HTMLButtonElement>

function ButtonField({
	title,
	typeField,
	className,
	ref,
	...rest
}: ButtonProps) {
	const field: Record<string, string> = {
		danger: 'bg-ErrorMessageText text-white hover:bg-ErrorMessageText/95',
		contrast: 'bg-contrast text-white hover:bg-contrast/95',
	}

	return (
		<main className={`${className ? className : 'w-full'}`}>
			<button
				{...rest}
				ref={ref}
				className={`${field[typeField!]} w-full cursor-pointer rounded border-2 p-3 text-sm font-bold shadow-xs duration-150 ease-in-out active:scale-[98%]`}>
				{title}
			</button>
		</main>
	)
}

export default ButtonField
