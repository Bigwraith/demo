import React from 'react'
import './App.less'
import Router from 'router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from 'store'

// import TextAdd from './pages/textAdd';

export default class APP extends React.Component<any> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <TextAdd />
        </header> */}
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Router />
          </PersistGate>
        </Provider>
      </div>
    );
  }

}
