
import React, { useState } from 'react'
import { Button, Input } from 'antd'
import { Istate } from './todo'

interface Iprops {
    mod: Istate[],
    addList: (todoItem: Istate) => void
}

const TodoButton: React.FC<Iprops> = (props: Iprops) => {
    const [text, setText] = useState<string>('')

    const handleChange = (e: React.ChangeEvent) => {
        // console.log((e.target as HTMLInputElement).value);
        setText((e.target as HTMLInputElement).value)
        
    }

    const handleClick = () => {
        
        // props.mod.push({text})
        props.addList({text: text})
        // console.log(props.mod,props.addList);
        setText('')     
    }

    return (
        <div>
            <Input value={text} placeholder='请输入' onChange={handleChange} />
            <Button onClick={handleClick}>添加</Button>
        </div>
    )
}

export default TodoButton