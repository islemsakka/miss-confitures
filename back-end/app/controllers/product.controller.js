const Product = require('../models/product.model');

exports.create = (req, res) => {
    const NewProduct = new Product({
        Product_Name: req.body.Product_Name,
        Product_Category: req.body.Product_Category,
        Price: req.body.Price,
        Jar_Size: req.body.Jar_Size,
        Description: req.body.Description,
        Link_Img: req.body.Link_Img
    });
    NewProduct.save().then((data, err) => {
        if (err) console.log(err)
        else res.send(data)
    })

}

exports.FindID = (req, res) => {
    Product.findById(req.params.id)
        .then(result => {
            if (result) res.status(200).json({
                _id: result._id,
                Product_Name: result.Product_Name,
                Product_Category: result.Product_Category,
                Price: result.Price,
                Jar_Size: result.Jar_Size,
                Description: result.Description,
                Link_Img: result.Link_Img
            })
        }).catch(err => {
            console.log(err)
            res.status(500).json({
                message: "Error Occured!"
            })

        })
}

exports.Update = (req, res) => {
    const id = req.params.id
    Product.findOneAndUpdate({ _id: id }, {
        Product_Name: req.body.Product_Name,
        Product_Category: req.body.Product_Category,
        Price: req.body.Price,
        Jar_Size: req.body.Jar_Size,
        Description: req.body.Description,
        Link_Img: req.body.Link_Img
    })
        .then(Product => { res.send(Product) }).catch(err => {
            console.log(err)
            res.status(500).json({
                message: "error! "
            })
        })
}



exports.delete = (req, res) => {
    const contId = req.params.id
    Product.findOneAndDelete({ _id: contId }).then(product => { res.send(product) })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "ERROR!" })
        })
}

exports.FindAll = (req, res) => {
    Product.find()
        .then(result =>
            res.status(200).json((result)))
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "Error Occured"
            })

        })
}