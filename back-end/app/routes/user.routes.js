module.exports = (app) => {
    const User = require('../controllers/user.controller');

    app.post("/add_user", User.create);

    app.get("/find_user/:id", User.FindID);

    app.get("/find_users/", User.FindAll);

    app.put('/update_user/:id', User.Update)

    app.delete('/delete_user/:id', User.delete)


}