import type { InputHTMLAttributes, Ref } from 'react'

type InputProps = {
	label?: string
	error?: string
	className?: string
	ref?: Ref<HTMLInputElement>
} & InputHTMLAttributes<HTMLInputElement>

function TextField({
	label,
	error,
	type,
	className,
	ref,
	...rest
}: InputProps) {
	return (
		<label
			className={`flex flex-col gap-1 ${className ? className : 'w-full'}`}>
			<p className="text-label text-xs font-bold">{label}</p>
			<input
				{...rest}
				ref={ref}
				type={type ? type : 'text'}
				className={` ${error ? 'border-ErrorMessageBorder text-ErrorMessageText' : 'border-inputBorder'} focus:border-contrast text-inputText placeholder:text-inputPlaceHolder rounded-sm border bg-white p-2.5 text-sm shadow-sm outline-none`}
			/>
		</label>
	)
}

export default TextField
