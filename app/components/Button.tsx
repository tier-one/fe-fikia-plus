
import Image from 'next/image';

interface ButtonProps {
    value?: string
    styling?: string
    icon?: string
    isLoading?: boolean
    onClick?: (e: React.FormEvent) => void
}

export default function Button({
    value,
    styling,
    icon,
    isLoading,
    onClick
}: ButtonProps) {
    return (
        <button className={styling} onClick={onClick}>
            <div className='flex'>
                {icon ? <Image alt='icon' src={icon} width={20} height={20} /> : ''}
                <div className='w-full ml-1'>{!isLoading ? value : 'Loading...'}</div>
            </div>
        </button>
    )
}

