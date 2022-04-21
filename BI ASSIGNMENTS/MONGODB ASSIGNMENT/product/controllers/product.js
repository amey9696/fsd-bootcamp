import {Product} from '../model/product.js'

let products=[] 

export const createProducts = (req,res)=>{
    const product = new Product({
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price,
    })
    product.save()
        .then(
            (result)=>{
                res.send(result)
                console.log({"status":"success"})
            }
        )
        .catch(
            (err)=>{
                console.log(err)
            }
        )
}

export const getProducts= (req,res)=>{
    
        getAll(req,res)
        //console.log(req.query)
   //console.log({status:"sucess"})
//    Product.find()
//         .then(
//             (result)=>{
//                 res.send(result)
//             }
//         )
//         .catch(
//             (err)=>{
//                 console.log(err)            
//             }
//         )
}

const getAll = (req,res) => {
    Product.aggregate([  
             { $project:{ _id :0,name :1,quality :1,price :1}}     
    ])
    .then(
        (result)=>{
            res.send(result)
            // console.log(result)
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
}
//res.status(200).json({status:"sucess"}
