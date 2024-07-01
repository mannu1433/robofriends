import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooooops. That is not good</h1>//throws error based cardlist if condition throw error method
        }
        return this.props.children
    }
}

export default ErrorBoundary;