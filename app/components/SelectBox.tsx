
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
    values:string[]
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
            
            <select
                value={value}
                onChange={handleChange}
                className={props.input?.className}
                {...props}
            >
                {values.map((fund:string, index:number) => (
                <option value={fund} key={index}>{ fund}</option>
                ))}
               
            </select>
        </div>
    )
}