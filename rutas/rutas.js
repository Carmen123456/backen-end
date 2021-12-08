import {insertFrase, getFrases, getFraseById, updateFrase, deleteFrase} from "../Controladores/FraseController.js";

const rutas = function (app){
    app.route('/frases')
    .get(getFrases)
    .post(insertFrase)

    app.route('/frases/:fraseId')
    .get(getFraseById)
    .put(updateFrase)
    .delete(deleteFrase)
}

export default rutas;