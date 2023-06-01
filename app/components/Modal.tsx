interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    title: string
}

const Modal = ({ children, isOpen, onClose, title }: ModalProps) => {

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white w-1/2 p-6 rounded-lg relative">
                        <button
                            onClick={onClose}
                            className="absolute top-0 right-0 m-4 text-black hover:text-gray-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <p >{title}</p>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
