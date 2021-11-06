import { useState } from 'react'
import TodoButton from './todoButton'

export interface Istate {
    text: string
}

const Todo: React.FC<{}> = () => {

    const [list, setList] = useState<Istate[]>([])

    const TodoList = list.map((item,index) => <p key={index}>{item.text}</p>)
    
    const addList = (todoItem: Istate) => {
        setList([...list, todoItem])
    }
            
        
    return (
        <div>
            <TodoButton mod={list} addList={addList} />
            {TodoList}
        </div>
    )
}

export default Todo