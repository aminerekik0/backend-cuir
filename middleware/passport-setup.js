import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const passport = require( "passport" );


const  {ExtractJwt } =require( "passport-jwt");
const JwtStrategy = require('passport-jwt').Strategy ;
import User from   "../model/User.js"
import config from "config"

const secretOrKey = config.get('secretOrKey')







const opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey
}


passport.initialize();
passport.use(new JwtStrategy(opts ,async (jwt_payload , done) => {
    console.log('jwt_payload', jwt_payload)
   const {id} = jwt_payload;
    try {
     const user = await User.findById({_id:id}).select('-password')
     console.log('user', user)
     user? done(null ,user ) : done(null,false)
 } catch (errors) {
     console.errors(error)

 }
}))
const isAuth = () => passport.authenticate('jwt' , {session:false})
 export default isAuth 

