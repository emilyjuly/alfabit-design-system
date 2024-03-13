export type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function getVariant(variant: ButtonProps['variant'], disabled: ButtonProps['disabled']) {
    switch (variant) {
        case 'primary':
            return disabled ? 'bg-disabled text-disabled cursor-not-allowed' : 'bg-primary text-white'
        case 'secondary':
            return disabled ? 'bg-disabled text-disabled cursor-not-allowed' : 'bg-quaternary text-primary'
        case 'tertiary':
            return disabled ? 'bg-transparent text-disabled cursor-not-allowed' : 'bg-transparent text-primary'
        default:
            return disabled ? 'text-disabled cursor-not-allowed' : 'text-primary'
    }
}

const Button = ({ variant = 'primary', children, className, disabled, ...rest }: ButtonProps) => {
    return <button
        className={`rounded-md px-6 py-2 ${getVariant(variant, disabled)} ${className}`}
        disabled={disabled}
        {...rest}
    >
        { children }
    </button>
}

export default Button
