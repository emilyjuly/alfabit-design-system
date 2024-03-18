import {Meta} from "@storybook/blocks";
import Notice, {NoticeProps} from "./Notice";
import {StoryObj} from "@storybook/react";

const meta: Meta<NoticeProps> = {
    title: "Molecules/Notice",
    component: Notice,
}

export default meta;


export const Primary: StoryObj<NoticeProps> = {
    args: {},
};

export const NoticeSuccess: StoryObj<NoticeProps> = {
    args: {
        type: 'success',
        message: 'Operação concluída com sucesso!'
    },
};

export const NoticeAlert: StoryObj<NoticeProps> = {
    args: {
        type: 'alert',
        message: 'Alerta, isso precisa da sua atenção!'
    },
};

export const NoticeError: StoryObj<NoticeProps> = {
    args: {
        type: 'error',
        message: 'Operação resultou em um erro!'
    },
};