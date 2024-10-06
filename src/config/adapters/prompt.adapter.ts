import prompt from "react-native-prompt-android";

interface Options {
    text: string,
    title: string,
    defaultValue?: string
    placeholder?: string
    type?: 'secure-text' | 'plain-text',
    cancelable?: boolean,
    buttons: Array<{ text: string, onPress: (password: string) => void, style?: "cancel" | "default" | "destructive" }>
    // Alternativa:   buttons: { text: string, onPress: (password: string) => void, style?: "cancel" | "default" | "destructive" }[]
}

export const showPrompt = ({ text, title, defaultValue, placeholder, type, cancelable, buttons }: Options) => {
    prompt(
        title,
        text,
        buttons,
        {
            type,
            cancelable,
            defaultValue,
            placeholder
        }
    );
}

