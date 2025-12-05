import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props)
    {
        super(props);
        this.state={hasError:true}
    }
    static getderivedStateFormError(error)
    {
        return{hasError:false};
    }
  render() {
    if(this.state.hasError)
    {
        return<h1>Something went wrong</h1>
    }
    return this.props.chindren
    
  }
}
