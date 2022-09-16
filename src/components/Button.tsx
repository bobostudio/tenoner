import React from 'react'
import './button.css';

export interface ButtonProps {
    type?: 'primary' | 'default' | 'danger' | 'warnning';
    size?: 'lg' | 'md' | 'sm';
    text: string;
    onClick?: () => void;
}

export const Button = ({ text, type = 'default', size = 'md', onClick }: ButtonProps) => {
    return (
        <button className={['button', `button-${size}`, `button-${type}`].join(' ')} onClick={onClick}>{text}</button>
    )
}
