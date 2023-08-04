
interface InputProps {
    value?: string
    label?: string
    onChange?: (value: string) => void
    className?: string
    required?: boolean
    container?: {
        className?: string
    }
    inputlabel?: {
        className?: string
    }
    input?: {
        className?: string
    }
    values: string[]
}

export default function SelectBox({
    value,
    label,
    required,
    onChange,
    className,
    values,
    ...props


}: InputProps) {
    const handleChange = (event: any) => {
        const { value } = event?.target
        onChange && onChange(value)
    }

    return (
        <div className={`${props.container?.className} ${className}`}>
            {label && required ?
                <label className={props.inputlabel?.className} htmlFor='app-input-field'>{label} <span className='text-ehr-red'>*</span></label> :
                <label className={props.inputlabel?.className} htmlFor='app-input-field'>{label}</label>}

            <div className="relative">
                <select className={`${props.input?.className} block appearance-none w-full px-4 py-2 pr-8 rounded-md border border-gray-300 bg-white text-[#475569] focus:outline-none `}
                    value={value}
                    onChange={handleChange}

                    {...props}
                >
                    {values.map((fund: string, index: number) => (
                        <option value={fund} key={index} className="py-4">{fund}</option>
                    ))}

                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center px-2 text-gray-700 mr-2 mt-3">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                        <path fillRule ="evenodd" d="M6 8l4 4 4-4H6z" />
                    </svg>
                </div>
            </div>

        </div>
    )
}