import google from '../../assets/socialIcons/google.svg'
import type { ButtonHTMLAttributes, Ref } from 'react'

type ButtonProps = {
	title: string
	icon: 'google'
	className?: string
	ref?: Ref<HTMLButtonElement>
} & ButtonHTMLAttributes<HTMLButtonElement>

function SocialButtonField({
	title,
	icon,
	className,
	ref,
	...rest
}: ButtonProps) {
	const field: Record<string, string> = {
		google: google,
	}

	return (
		<main className={`${className ? className : 'w-full'}`}>
			<button
				{...rest}
				ref={ref}
				className={`border-BtnSocialMediaBorder hover:bg-BtnSocialMediaHover text-textBtnSocialMedia flex w-full cursor-pointer items-center justify-center gap-2 rounded border-2 bg-white p-3 text-sm font-bold shadow-xs duration-150 ease-in-out active:scale-[98%]`}>
				<img
					src={field[icon]}
					className="h-4"
				/>
				{title}
			</button>
		</main>
	)
}

export default SocialButtonField
