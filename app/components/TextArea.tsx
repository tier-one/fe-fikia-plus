
import Image from "next/image"

interface InputProps {
    value?: string
    label?: string
    placeholder?: string
    icon?: string
    name?: string
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    onBlur?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
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
}

export default function TextArea({
    value,
    label,
    placeholder,
    required,
    icon,
    onChange,
    onBlur,
    className,
    ...props
}: InputProps) {

    return (
        <div className={`${props.container?.className} ${className}`}>
            {label && required ?
                <label className={props.inputlabel?.className} htmlFor="app-input-field">{label} <span className="text-red-500">*</span></label> :
                <label className={props.inputlabel?.className} htmlFor="app-input-field">{label}</label>}
            <div className="">
                {icon ? <Image alt='icon' src={icon} width={16} height={16} /> : ''}

            </div>
            <textarea
                value={value}
                rows={6}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                className={props.input?.className}
                {...props}
            />
        </div>
    )
}