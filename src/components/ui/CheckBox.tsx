import { Checkbox, Field } from '@headlessui/react'
import { useState } from 'react'

type CheckBoxProp = {
	label?: string
	onCheckChange: (checked: boolean) => void
	disabled?: boolean
}

function CheckBox({ label, disabled, onCheckChange }: CheckBoxProp) {
	const [enabled, setEnabled] = useState(false)

	const handleChange = () => {
		setEnabled(!enabled)
		onCheckChange(!enabled)
	}

	return (
		<Field className="flex items-center gap-3">
			<Checkbox
				disabled={disabled}
				checked={enabled}
				onChange={handleChange}
				className="group data-checked:bg-contrast block size-4 rounded border bg-white">
				{/* Checkmark icon */}
				<svg
					className="stroke-white opacity-0 group-data-checked:opacity-100"
					viewBox="0 0 14 14"
					fill="none">
					<path
						d="M3 8L6 11L11 3.5"
						strokeWidth={2}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</Checkbox>
			<span>{label}</span>
		</Field>
	)
}

export default CheckBox
