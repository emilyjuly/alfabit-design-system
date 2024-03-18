import classNames from "classnames";
import React from "react";

export type BoxProps = {
    rounded?: boolean;
    border?: boolean;
    filledBackground?: boolean;
    type?: "primary" | "secondary" | "tertiary" | "dark" | "alert" | "success" | "error";
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const boxClassMap = {
    primary: "bg-primary rounded-xl text-white p-2",
    secondary: "bg-quaternary rounded-xl p-2",
    tertiary: "bg-dark rounded-xl p-2",
    dark: "bg-dark p-2",
    alert: "bg-yellow-200 p-2",
    success: "bg-green-100 p-2",
    error: "bg-error p-2",
};

const Box = ({
                 rounded = false,
                 border = false,
                 filledBackground = false,
                 type = "primary",
                 children,
                 className,
                 ...rest
             }: BoxProps) => {
    const classes = classNames({
        "rounded-md": rounded,
        "border border-gray-100": border,
        "bg-dark": filledBackground,
        [boxClassMap[type]]: type,
    });
    return (
        <div className={classes} {...rest}>
            {children}
        </div>
    );
};

export default Box;