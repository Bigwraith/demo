import { useState, useEffect } from "react";
import { Button } from "antd";

const SampleModel: React.FC<{}> = () => {

    const [count, setCount] = useState(1)
    const [istrue, setTrue] = useState(false)

    
    
    const handleClick = () => {
        setCount(count+1)
    }

    useEffect(() => {
        const a: Array<string> = ['ni', 'hello']
        const b: string[] = ['hao', 'world']
        const c: string[] = ['shagua','!!!']
        const d: object[] = []
        for(let i in a){
            let aa: object = {
                0: a[i],
                1: b[i],
                2: c[i]
            }
            d.push(aa); 
        }
        console.log(d);
        
    })


    return (
        <div>
            <p>{count}</p>
            <Button onClick={handleClick}>+1</Button>
            {istrue? <p>true</p>: <p>false</p>}
            <Button onClick={() => setTrue(!istrue)}>change</Button>
            
        </div>
    )
}

export default SampleModel