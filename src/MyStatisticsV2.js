import React, {useState} from 'react';
import {AgGridColumn, AgGridReact} from "ag-grid-react";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

const MyTable = () =>{
    const [gridApi, setGridApi ] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const myData = () =>{
        const rawDataBase = JSON.parse(localStorage.getItem('baseOfValues'));
        return rawDataBase;
    };

    const [ rowData, setRowData] = useState(myData());


    return(
        <div className="ag-theme-alpine-dark" style={{ height: 800, width: 1400 }}>

            <AgGridReact rowData={rowData}>
                <AgGridColumn field={'date'} sortable={true} filter={true} checkboxSelection={ true }></AgGridColumn>
                <AgGridColumn field={'time'} sortable={true} filter={true} ></AgGridColumn>
                <AgGridColumn field={'upperPressure'} sortable={true} filter={true} ></AgGridColumn>
                <AgGridColumn field={'lowerPressure'} sortable={true} filter={true} ></AgGridColumn>
                <AgGridColumn field={'pulse'} sortable={true} filter={true} ></AgGridColumn>
                <AgGridColumn field={'comment'} sortable={true} filter={true} ></AgGridColumn>
            </AgGridReact>

        </div>
    )


}

export default MyTable;
