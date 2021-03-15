import React, {Component} from 'react'
import './NavigationButton.css'
import {Link} from "react-router-dom";

const NavigationButton = () =>{
    return(
        <div id={'navigationBar'}>
            <Link className={'link'} to={"/"}>Ввод данных</Link>
            <Link className={'link'} to={"./statistics"}>Статистика</Link>
        </div>
    )
}

export default NavigationButton
