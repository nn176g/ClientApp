import React from 'react';
import { Layout } from './components/Layout';
import Producto from './views/Productos/Productos';
import MainMenu from './views/MainMenu/MainMenu';
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilsConfigurator } from "./utils/SnackBarMessage";
import './custom.css'
import { Route } from 'react-router';
import { Provider } from "react-redux";
import store from "./configureStore";

const App = () => {

  return (
    <SnackbarProvider maxSnack={2}>
      <SnackbarUtilsConfigurator />
      <Provider store={store}>
        <Layout>
          <Route path='/producto' component={Producto} />
          <Route>
            < MainMenu />
          </Route>
        </Layout>
      </Provider>
    </SnackbarProvider>
  );
}

export default App;