import { Suspense } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { router } from './config'
import Login from 'pages/login'

import { Row, Spin } from 'antd'

const Router: React.FC = () => {

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => (<Redirect to="/login" />)} />
                    <Route exact path="/login" component={Login} ></Route>
                    <Suspense fallback={<Row align='middle' justify='center'><Spin /></Row>}>
                        { router.map( (item: object, index: number) => <Route {...item} key={index} /> ) }
                    </Suspense>
                    
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router