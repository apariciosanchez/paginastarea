import UserRepository from "../repository/UserRepository.js"
export const UserController={

    async register(req,res){
        const{username,password}=req.body
        console.log(username);
        try{
            const responseDate=UserRepository.create({
                username,
                password
            })
            res.send({
                status:true,
                id :responseDate,
                message:"Register sucessfull"
            })
        } catch (error) {
            res.send({
                status:false,
                message: 'Error' + error.message
            })
        }
    },

    async login(req,res){
        try{
        const {username, password} = req.body
        const responseDate=UserRepository.login({username,password})
        }
        catch(error){
        res.send({
            status:true,
            message: 'error' + error.massege 
        });
        }
    },
};