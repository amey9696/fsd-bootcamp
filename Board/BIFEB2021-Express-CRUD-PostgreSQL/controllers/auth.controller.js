import db from '../models/index.js';
import {secret} from '../config/auth.config.js'
import jsonwebtoken from 'jsonwebtoken'
import bcryptjs  from 'bcryptjs'

const User=db.users;
const Role=db.roles;

const Op=db.Sequelize.Op

export const signup = (req, res)=>{
    User.create({
        username : req.body.username,
        email : req.body.email,
        password : bcryptjs.hashSync(req.body.password, 8)    
    })
    .then((user)=>{
        if(req.body.roles){
            Role.findAll({
                where:{
                    name:{
                        [Op.or]:req.body.roles
                    }
                }
            }).then(roles=>{
                user.setRoles(roles).then(()=>{
                    res.status(201).send({
                        message:"User was successfully registered"
                    })
                })
            })
        }
    })
}
export const signin = (req, res)=>{
    User.findOne({
        where:{
            username:req.body.username
        }
    })
    .then((user)=>{
        if(!user){
            return res.status(404).send({
                message:"User not found"
            })
        }
        var passswordIsValid=bcryptjs.compareSync(
            req.body.password,
            user.password
            )
        if(!passswordIsValid){
            return res.status(401).send({
                message:"Invalid Password"
            })
        }
        //now at this point you are done with the verifying of password
        //now you have to generate the token so that you can send it as a response
        var token=jwt.sign({id:user.id}, secret, {
            expiresIn:86400//24 hrs
        });
        var authorities=[];
        user.getRoles().then(roles=>{
            for(let i=0;i<role.length;i++){
                authorities.push("ROLE_"+role[i].name.toUpperCase())
            }
            res.status(200).send({
                id:user.id,
                username:user.username,
                email:user.email,
                roles:authorities,
                accessToken: token
            })
        })

    })
    .catch((err)=>{
        res.status(500).send({message:err.message})
    })
}
