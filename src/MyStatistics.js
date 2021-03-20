import React, {Component} from 'react'


const MyStatisticsHead = () =>{
        return (
            <thead>
            <tr>
                <th>Дата</th>
                <th>Время</th>
                <th>Верхнее</th>
                <th>Нижнее</th>
                <th>Пульс</th>
                <th>Рука</th>
                <th>Комментарий</th>
                <th/>
            </tr>
            </thead>
        )
}


 const MyStatistics = (props) => {

            const RowRemover = props.RowRemover;
            const dataBase = JSON.parse(localStorage.getItem('baseOfValues'));
            
            
            const tableData = dataBase.map((elem, index) => {

                let array = Object.values(elem);

                const arrayRows = array.map((myelem, index) => {

                    return(
                        <td key={index}>
                            {myelem}
                        </td>
                    )
                })

                return (
                    <tr key ={index}>
                        {arrayRows}
                        <td>
                            <button className={'deleteButton'} onClick={() =>{RowRemover(index)}}>X</button>
                        </td>
                    </tr>
                )
            })

        return (<tbody>{tableData}</tbody>)
}


const Table =(props) =>{

    return(
            <table>
                <MyStatisticsHead/>
                <MyStatistics RowRemover={props.RowRemover} />
            </table>
    )
}


export default Table
