import { CheckIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

type CheckBoxProps = {
	label: string
}

function CheckBox({ label }: CheckBoxProps) {
	const [selected, setSelected] = useState(false)
	return (
		<div className="flex items-center gap-2">
			<button
				type="button"
				onClick={() => setSelected(!selected)}
				className={`flex h-6 w-6 items-center justify-center rounded-sm border ${
					selected
						? 'bg-contrast border-contrast/10'
						: 'border-gray-300 bg-transparent'
				}`}>
				<CheckIcon
					className={`size-4 font-bold text-white ${!selected && 'hidden'}`}
				/>
			</button>
			<span className="text-title text-sm md:text-lg">{label}</span>
		</div>
	)
}

export default CheckBox
