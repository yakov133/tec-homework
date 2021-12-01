import React, { Component } from 'react'
import NumbersBtn from './NumbersBtn'

import * as style from "./style.module.css"

export default class GameClicking extends Component {
    render() {
        return (
            <div className = {style.centerAll}>
                <NumbersBtn />
            </div>
        )
    }
}
