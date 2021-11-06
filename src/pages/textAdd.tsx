import React, { useContext } from 'react'

import Test from './test'
import Todo from './todo'

interface t {
    light?: object,
    dark?: object
}

const TextAdd: React.FC = () => {
    
    const themes: t = {
        light: {
          foreground: "#000000",
          background: "#eeeeee"
        },
        dark: {
          foreground: "#ffffff",
          background: "#222222"
        }
      }

    const TestContext = React.createContext(themes.light)

    const Handle = () => {
        const theme: any = useContext(TestContext)
        return <div style={{background: theme.background}}>enenen</div>
    }


    return (
        <div>
            hello world
            <Test />
            <TestContext.Provider value={themes.light}>               
                <Handle />
            </TestContext.Provider>
            <Todo />
        </div>
    )

}

export default TextAdd