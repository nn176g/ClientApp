import '../../custom.css';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Title from "../../components/Title/Title";
import CopyrightForm from '../../components/CopyrightForm/CopyrightForm';
import Styles from './MainMenuStyles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

const useStyles = makeStyles(Styles);

function SignIn({ setDatos }) {
  const classes = useStyles();

  function setInventario(InControlador) {
    const datos = {
      type: 'Set_' + InControlador,
      Controlador: InControlador,
      Titulo: 'Listar ' + InControlador + ' de juanito'
    }
    setDatos(datos);
  }
  function setCompra(InControlador) {
    const datos = {
      type: 'Set_' + InControlador,
      Controlador: InControlador,
      Titulo: 'Listar ' + InControlador + ' de juanito'
    }
    setDatos(datos);
  }
  function setVenta(InControlador) {
    const datos = {
      type: 'Set_' + InControlador,
      Controlador: InControlador,
      Titulo: 'Listar ' + InControlador + ' de juanito'
    }
    setDatos(datos);
  }

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Title
          textValue="Juan Assessment" />
        <form className={classes.form} noValidate>
          <Grid className={classes.form}>
            <Grid container>
              <Grid item xs>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  data-testid="TestInventario"
                  component={Link}
                  to="/producto"
                  size="small"
                  onClick={setInventario('Inventario')}
                >
                  Productos
                </Button>
              </Grid>
              <Grid item xs>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  data-testid="TestVenta"
                  component={Link}
                  to="/producto"
                  size="small"
                  onClick={setVenta('Venta')}
                >
                  Ventas
                </Button>
              </Grid>
              <Grid item >
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  data-testid="TestCompra"
                  component={Link}
                  to="/producto"
                  size="small"
                  onClick={setCompra('Compra')}
                >
                  Compras
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <CopyrightForm />
      </Box>
    </Container>
  );
}

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
  setDatos(data) {
    dispatch({
      type: data.type,
      Controller: data.Controlador,
      Titulo: data.Titulo
    })
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);