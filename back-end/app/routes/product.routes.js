module.exports = (app) => {
    const Product = require('../controllers/product.controller');

    app.post("/add_product", Product.create);

    app.get("/find_product/:id", Product.FindID);

    app.get("/find_products/", Product.FindAll);

    app.put('/update_product/:id', Product.Update)

    app.delete('/delete_product/:id', Product.delete)

}