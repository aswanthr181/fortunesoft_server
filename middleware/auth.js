const jwt=require('jsonwebtoken')

const verifyToken=async(req,res,next)=>{
    let token=req.header("Authorization")
    try {
        if(!token){
            return res.status(404).json({message:"authorization failed: no token provided"})
        }
        if(token.startsWith("Bearer ")){
            console.log(token);
            
            next();
        }
    } catch (error) {
        return res
      .status(404)
      .json({ message: "Authentication failed: invalid token." });
    }
}

module.exports={
    verifyToken
}