import React from 'react'

type Props = {
    title?: string;
    buttonStyles?: string;
    textStyle?: string;
    onClick?: () => void;
}

const NewButton = ({ title, buttonStyles, textStyle, onClick }: Props) => {
  return (
    <div onClick={onClick} className={`${buttonStyles} cursor-pointer`}>
        <h1 className={textStyle}>{title}</h1>
    </div>
  )
}

export default NewButton