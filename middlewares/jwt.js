import jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config("../")

export const createToken = async (data,secretKey)=>{

    const token= jwt.sign(data,secretKey,{ expiresIn: '1h', algorithm: 'HS256' })
    //console.log(token)
    return token 

}

export const validateToken = async (token)=>{

    try {
        const tokenDecode = jwt.verify(token,process.env.SECRET_KEY)
        //console.log(tokenDecode)
        return tokenDecode
        
    } catch (error) {
        throw(error)
    }
}

