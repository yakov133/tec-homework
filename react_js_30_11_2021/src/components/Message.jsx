import React, { Component } from 'react'

export default class Message extends Component {
//     state = {show:false}
// chanegeShow = (bool)=> this.ssetState({show:bool});

    render() {
        return (
            <div>
                  {this.props.show ? <h1>Game Over</h1> : ""}      
            </div>
        )
    }
}
