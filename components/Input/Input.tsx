export type InputProps = {
    label?: string;
    multiline?: boolean;
} & (
    React.InputHTMLAttributes<HTMLInputElement> |
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
    )

const InputOrTextArea = (props: InputProps | undefined) => {
    if (props && props.multiline) {
        return <textarea {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} />
    } else {
        return <input {...props as React.InputHTMLAttributes<HTMLInputElement>} />
    }
}

const Input = ({ label, className, ...rest }: InputProps) => {
    return <div className="relative">
        {label && <label className="absolute pt-1 pl-3 text-xs">{label}</label>}
        <InputOrTextArea
        className={`
            bg-dark font-gray-primary rounded-md p-3
            disabled:bg-disabled disabled:border-2 disabled:border-disabled disabled:cursor-not-allowed
            ${label && 'pt-6'}
            ${className}
        `}
        {...rest}
        />
    </div>
}

export default Input;