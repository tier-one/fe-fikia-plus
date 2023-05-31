import Image from 'next/image'

interface InputProps{
  value?: string
  label?: string
  placeholder?: string
  type?: string
  onChange?: (value: string)=> void
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

export default function InputField({ 
    value, 
    label, 
    placeholder, 
    required, 
    type,
    onChange, 
    className,
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
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={props.input?.className}
        {...props}
        
      />
    </div>
  )
}