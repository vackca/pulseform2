import React from 'react'
import './NavigationButton.css'
import {NavLink} from "react-router-dom";

const NavigationButton = () =>{

        return(
            <div id={'navigationBar'}>
                <NavLink exact={true}  className={'link'} activeClassName='soactive'  to={"/"}>Ввод данных</NavLink>
                <NavLink  className={'link'} activeClassName='soactive'    to={"./statistics"}>Статистика</NavLink>
            </div>
        )
}




export default NavigationButton
