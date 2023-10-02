import Image from 'next/image';

interface ButtonProps {
  value?: string;
  styling?: string;
  icon?: string;
  onClick?: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export default function Button({
  value,
  styling,
  icon,
  onClick,
  isLoading,
  isDisabled
}: ButtonProps) {
  return (
    <button type='submit' className={styling} onClick={onClick} disabled={isDisabled}>
      <div className='flex items-center justify-center'>
        {isLoading ? (
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
        ) : (
          <>
            {icon && <Image alt='icon' src={icon} width={20} height={20} />}
            <div className='w-full'>{value}</div>
          </>
        )}

      </div>
    </button>
  );
}

