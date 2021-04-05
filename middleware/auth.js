import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    //   check if userToken is valid
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret);
      req.userId=decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
    //   sub is googleid that differentiates users
      req.userId=decodedData?.sub;
    }    
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;

// import jwt from "jsonwebtoken";
// import User from "../models/user.js";
// const auth = async (req, res, next) => { try {
//     //look for header provided in postman
//     const token = req.headers.authorization.split(" ")[1];

//     //validate the header
//     const decoded = jwt.verify(token, 'test')
//     //find the user
//     const user = await User.findOne({ _id: decoded._id, 'tokens.token':token })
    
//     if(!user){
//         throw new Error()
//     }

//         req.token=token
//         req.user = user
//         next()
        
//     } catch (e) {
//     res.status(401).send({ error: 'Please authenticate.' }) }
// }

// export default auth;
