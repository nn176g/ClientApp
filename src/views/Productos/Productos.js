import React, { useState, useEffect } from 'react';
import { forwardRef } from 'react';
import SiteService from '../../services/SiteService.js';
// import { makeStyles } from '@material-ui/core/styles';
// import Styles from '../Productos/ProductosStyle';

import { snackActions } from '../../utils/SnackBarMessage';
import { connect } from 'react-redux';


import MaterialTable from "material-table";
// import Avatar from 'react-avatar';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';


const Productos = ({ currentData }) => {
    let Contrladr = currentData.Controller
    const [data, setData] = useState([]);
    const getData = () => {
        SiteService.getDatos(Contrladr)
            .then(function (myJson) {
                setData(myJson.data);
            })
            .catch(function (myJson) {
                console.log(myJson);
            });
    }
    useEffect(getData, []);
    const loadData = () => {
        if (data) {
            return <div>
                {fillTable(data)}
            </div>
        }
    }

    const handleRowAdd = (newData, resolve) => {
        let errorList = []
        if (newData.nombre === undefined) {
            snackActions.warning('Please enter name')
        }
        if (newData.cantidad === undefined) {
            snackActions.warning('Please enter la cantidad')
        }
        if (errorList.length < 1) { //no error
            const inventario = {
                id: 0,
                nombre: newData.nombre,
                cantidad: newData.cantidad
            };

            console.log(inventario)
            const aa = SiteService.InsertarInventario(inventario);
            console.log(aa)
                .then(res => {
                    console.log(res.data)
                    let dataToAdd = [...data];
                    dataToAdd.push(newData);
                    setData(dataToAdd);
                    resolve()
                })
                .catch(error => {
                    console.log(error)
                    snackActions.error('Cannot add data. Server error!')
                    resolve()
                })
        } else {
            resolve()
        }
    }
    const handleRowUpdate = (newData, oldData, resolve) => {

    }

    const handleRowDelete = (oldData, resolve) => {

    }

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };
    const getColumns = () => {
        let columns = []
        if (currentData.Controller === 'Inventario') {
            return columns = [
                { title: "id", field: "id", hidden: true },
                { title: "Nombre", field: "nombre" },
                { title: "Cantidad", field: "cantidad" },
            ]
        } else {
            return columns = [
                { title: "id", field: "id", hidden: true },
                { title: "usuario", field: "usuario" },
                { title: "Cantidad", field: "cantidad" },
                { title: "Nombre", field: "nombre" },
                { title: "ProductoId", field: "productoId" },
            ]
        }
    }

    function fillTable(data) {
        return (
            <div>
                <MaterialTable
                    title={currentData.Titulo}
                    columns={getColumns()}
                    data={data}
                    icons={tableIcons}
                    editable={{
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve) => {
                                handleRowUpdate(newData, oldData, resolve);
                            }),
                        onRowAdd: (newData) =>
                            new Promise((resolve) => {
                                handleRowAdd(newData, resolve)
                            }),
                        onRowDelete: (oldData) =>
                            new Promise((resolve) => {
                                handleRowDelete(oldData, resolve)
                            }),
                    }}
                />
            </div>
        )
    }
    return (
        <div>
            {loadData()}
        </div>
    );
};

const mapStateToProps = state => ({
    currentData: state
})
export default connect(mapStateToProps)(Productos);


