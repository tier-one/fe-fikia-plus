import React from 'react';

interface Options {
  label: string;
  value: any;
}

interface SelectProps {
  value?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  options?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  register?: any;
  name?: string;
  errors?: any;
  selectClass?: string;
  halfField?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  hideIcon?: boolean;
}

export default function SelectInputField({
  value,
  label,
  placeholder,
  required,
  options,
  onChange,
  onBlur,
  className,
  register = () => null,
  name,
  selectClass,
  errors,
  halfField,
  disabled,
  defaultValue,
  hideIcon,
  ...props
}: SelectProps) {
  const handleChange = (event: any) => {
    const { value } = event?.target;
    onChange && onChange(value);
  };

  return (
    <div
      className={`flex flex-col mt-1  ${className} ${
        halfField ? 'w-1/2' : 'w-full'
      }`}
    >
      {label && required ? (
        <label
          className={'text-base text-gray-600 font-light'}
          htmlFor="app-input-field"
        >
          {label} <span className="text-red-500">*</span>
        </label>
      ) : (
        <label
          className={'text-base text-gray-600 font-light'}
          htmlFor="app-input-field"
        >
          {label}
        </label>
      )}
      <select
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full text-sm border border-gray-300 ${
          hideIcon ? 'appearance-none' : ''
        } bg-ehr-light-gray placeholder:text-ehr-dark-gray p-[10px] rounded-md mt-3 invalid:text-gray-400 focus:outline-none ${selectClass}`}
        {...register(name, { required })}
        {...props}
        disabled={disabled}
        defaultValue={defaultValue}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        {options?.map((opt: Options) => (
          <option value={opt.value} key={opt.value} className="py-12">
            {opt.label ?? opt.value}
          </option>
        ))}
      </select>
      {errors && (
        <label className="text-xs text-ehr-red my-2">
          {name && errors[name] && `${label} is required`}
        </label>
      )}
    </div>
  );
}
