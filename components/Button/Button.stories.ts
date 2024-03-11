import { Meta, StoryObj } from "@storybook/react"

import Button, { ButtonProps } from "./Button"

const meta: Meta<ButtonProps> = {
    title: 'Molecules/Button',
    component: Button,
    argTypes: {
        children: {
            type: "string"
        },
        disabled: {
            type: "boolean"
        },
        className: {
            type: "string"
        },
    }
}

export default meta

export const Primary: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão'
    }
}

export const PrimaryDisabled: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        disabled: true,
    }
}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        variant: 'secondary',
    }
}

export const SecondaryDisabled: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        variant: 'secondary',
        disabled: true,
    }
}


export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        variant: 'tertiary',
    }
}

export const TertiaryDisabled: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        variant: 'tertiary',
        disabled: true,
    }
}

export const Violet: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        className: 'theme-violet'
    }
}

export const VioletDisabled: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        className: 'theme-violet',
        disabled: true,
    }
}

export const VioletSecondary: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        className: 'theme-violet',
        variant: 'secondary',
    }
}

export const VioletSecondaryDisabled: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        className: 'theme-violet',
        variant: 'secondary',
        disabled: true,
    }
}

export const VioletTertiary: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        className: 'theme-violet',
        variant: 'tertiary',
    }
}

export const VioletTertiaryDisabled: StoryObj<ButtonProps> = {
    args: {
        children: 'Botão',
        className: 'theme-violet',
        variant: 'tertiary',
        disabled: true,
    }
}


