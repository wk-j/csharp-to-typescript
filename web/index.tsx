import { ModelApiFactory } from "../output/api"
import { Configuration } from "../output"
import React from "react"
import ReactDOM from "react-dom"

var config = new Configuration()
config.accessToken = "Bearer AAA"

var path = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '')

var fact = ModelApiFactory(config, path)

export class App extends React.Component {
    render() {
        fact.apiModelGetStudentGet().then(rs => {
            console.log(rs)
        })
        return <h1>Hello, world!</h1>
    }
}

var el = document.getElementById("root")
ReactDOM.render(<App />, el)