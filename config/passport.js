import passport from "passport";
import { Strategy as  BearerStrategy} from "passport-http-bearer";
import { validateToken } from "../middlewares/jwt.js";

passport.use(new BearerStrategy(
    async function(token, done) {
        try {
            const usuario =  await validateToken(token)
            if (!usuario) return done(null, false); 
            return done(null, usuario);
        } catch (error) {
                return done(error,false); 
        } 
    }
));
export default passport;