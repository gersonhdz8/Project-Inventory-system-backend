export default function checkRole(req, res, next){

    //console.log(req)
    const userRole = req.user.role;      
    const baseUrl = req.baseUrl;
    //console.log(userRole) 
    //console.log(baseUrl)

    const rolePermissions = {
        client: ['/aplication/client'],
        admin: ['/aplication/client', '/aplication/admin'],
        superadmin: ['/aplication/client', '/aplication/admin', '/aplication/superadmin']
    };   
    
    
    if (rolePermissions[userRole] && rolePermissions[userRole].includes(baseUrl)) {        
        next();
    } else {        
        res.status(403).json({ mensaje: 'Acceso denegado. No tienes permisos para acceder a esta ruta.' });
    }
}