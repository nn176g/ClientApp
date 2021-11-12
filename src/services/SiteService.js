import axios from 'axios';
class SiteService {

    static API = "https://localhost:44325/api/"
    static getDatos(Controlador) {
        return axios.get(SiteService.API + Controlador + "/Listar",
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
    }
    static Insertar(data) {
        return axios.post(SiteService.API + "Inventario/InsertarProducto",
            {
                headers: {
                    'Content-Type': 'text/json',
                    'Accept': 'text/json'
                }
            },
            {
                data: JSON.stringify(data)
            }
        );
    }
}

export default SiteService;