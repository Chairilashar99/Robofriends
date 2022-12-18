import React, {Componenet} from "react";

class ErrorBoundry extends Componenet{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDisCatch(error, info){
        this.setState({hasError: true})
    }

    render(){
        if(this.state.hasError){
            return <h1>Ooops.That is not good</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;