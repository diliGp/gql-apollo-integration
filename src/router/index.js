import React from 'react'
import Header from '../components/Header'
import { Switch, Route } from 'react-router-dom'
import Books from '../components/Books'
import Posts from '../containers/Posts'
import Home from '../components/Home'

const Router = () => {
    return (
        <>
            <Header />
            <main>
                <Switch>
                    <Route path="/books" render={props => <Books {...props} />} />
                    <Route path="/posts" render={props => <Posts {...props} />} />
                    <Route path="/" render={props => <Home {...props} />} />
                </Switch>
            </main>
        </>
    )
}

export default Router
