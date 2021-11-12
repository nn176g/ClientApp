const proxy = require("http-proxy-middleware");
// console.log(1);
module.exports = function (app) {
    app.use(
        proxy("/api/Inventario/ListarProductos", {
            target: "https://localhost:44325",
            secure: false,
            changeOrigin: true
        })
    );
    // app.use(
    //     proxy("/api/Inventario/InsertarProducto", {
    //         target: "https://localhost:44325",
    //         secure: false,
    //         changeOrigin: true
    //     })
    // );
}