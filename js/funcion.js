let user_name = (prompt("Ingrese su nombre->"))
mostrarInfor(user_name)
function mostrarInfor(name_user){
    let mensaje = "Hola, bienvenido : " + name_user
    alert(`${mensaje}`)
}