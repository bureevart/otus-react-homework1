import { ChangeEventHandler, MouseEventHandler } from "react";


interface Props {
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function Input({ onChange }: Props){
    return <input onChange={onChange} />
}