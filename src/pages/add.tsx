import React from 'react'


interface IState {
  name: string,
  age?: number,
  count?: number
}

export default class ADD extends React.Component< any, IState > {

  constructor(props: any) {
    super(props)
    
    this.state = {
      name: "hahah",
      count: 0
    }
  }

  add = () => {
    this.setState((state: any, props) => ({
      count: state.count + 1
    }))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.name}
          获取到的数量： {this.state.count}
          <button onClick={this.add}>+1</button>
        </header>
      </div>
    );
  }

}
