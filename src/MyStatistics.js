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

const dataChanger =(date)=>{
    const letterArray = date.split('')
        date = (letterArray[8] + letterArray[9] +':' +letterArray[5]+letterArray[6]+
        ':' +letterArray[0]+letterArray[1]+letterArray[2]+letterArray[3])
    return date;

}

 const MyStatistics = (props) => {

            const RowRemover = props.RowRemover;
            const dataBase = JSON.parse(localStorage.getItem('baseOfValues'));
            
            
            const tableData = dataBase.map((elem, index) => {

                let array = Object.values(elem);

                const arrayRows = array.map((myelem, index) => {
                    if(Number(myelem.toString().substr(0,4))>2020){

                            myelem = dataChanger(myelem);
                    };

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


export default Table;
