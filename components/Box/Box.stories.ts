import {Meta, StoryObj} from "@storybook/react";

import Box, {type BoxProps} from './Box'

const meta: Meta<BoxProps> = {
    title: "Design System/Atoms/Box",
    component: Box,
    argTypes: {
        children: {type: "string"},
        type: {
            type: "string", options: [
                'alert',
                'primary',
                'secondary',
                'dark',
                'success',
                'error'],
            control: { type: 'select' },
        },
        rounded: {type: "boolean"},
        border: {type: "boolean"},
        filledBackground: {type: "boolean"},
        className: {type: "string"},
    },
};

export default meta;

export const Primary: StoryObj<BoxProps> = {
    args: {
        children: "Este é uma Box Padrão",
        filledBackground: true,
        type: "primary",
    },
};

export const Secondary: StoryObj<BoxProps> = {
    args: {
        children: "Este é uma Box secundária",
        filledBackground: true,
        type: "secondary",
    },
};

export const Tertiary: StoryObj<BoxProps> = {
    args: {
        children: "Este é uma Box secundária",
        filledBackground: true,
        type: "tertiary",
    },
};


export const BoxAlert: StoryObj<BoxProps> = {
    args: {
        children: "Este é um alerta!",
        filledBackground: true,
        rounded: true,
        type: "alert",
    },
};

export const BoxSuccess: StoryObj<BoxProps> = {
    args: {
        children: "Operação concluída com sucesso!",
        filledBackground: true,
        rounded: true,
        type: "success",
    },
};

export const BoxError: StoryObj<BoxProps> = {
    args: {
        children: "Ocorreu um erro durante a operação.",
        filledBackground: true,
        rounded: true,
        type: "error",
    },
};

export const BoxDark: StoryObj<BoxProps> = {
    args: {
        children: "Este é uma box dark.",
        filledBackground: true,
        rounded: true,
        type: "dark",
    },
};
