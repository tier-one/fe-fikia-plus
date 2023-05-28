
import Image from 'next/image';

interface ButtonProps {
    value?: string
    styling?: string
    icon?: string
    onClick?: () => void
}

export default function Button({
    value,
    styling,
    icon,
    onClick
}: ButtonProps) {
    return (
        <button className={styling} onClick={onClick}>
            <div className='flex'>
                {icon ? <Image alt='icon' src={icon} width={20} height={20} /> : ''}
                <div className='w-full'>{value}</div>
            </div>
        </button>
    )
}

