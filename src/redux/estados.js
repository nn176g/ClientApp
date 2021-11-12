const initialState = {
    Controller: '',
    Titulo: ''

}
export default (state = initialState, action) => {

    console.log(action)
    switch (action.type) {
        case "Set_Inventario":

            console.log('llega al inventario')
            return {
                ...state,
                Controller: action.Controller,
                Titulo: action.Titulo
            }
        case "Set_Compra":

            console.log('llega a la compra')
            return {
                ...state,
                Controller: action.Controller,
                Titulo: action.Titulo
            }
        case "Set_Venta":

            console.log('lega a la venta')
            return {
                ...state,
                Controller: action.Controller,
                Titulo: action.Titulo
            }
        default:
            break;
    }
    return state
}
