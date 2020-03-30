const User = require('../models/user.model');

exports.create = (req, res) => {
    const NewUser = new User({
        First_Name: req.body.First_Name,
        Last_Name: req.body.Last_Name,
        Email: req.body.Email,
        Phone_Number: req.body.Phone_Number,

    });
    NewUser.save().then((data, err) => {
        if (err) console.log(err)
        else res.send(data)
    })

}


exports.FindID = (req, res) => {
    User.findById(req.params.id)
        .then(result => {
            if (result) res.status(200).json({
                _id: result._id,
                First_Name: result.First_Name,
                Last_Name: result.Last_Name,
                Email: result.Email,
                Phone_Number: result.Phone_Number,

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
    User.findOneAndUpdate({ _id: id }, {
        First_Name: req.body.First_Name,
        Last_Name: req.body.Last_Name,
        Email: req.body.Email,
        Phone_Number: req.body.Phone_Number,
    })
        .then(User => { res.send(User) }).catch(err => {
            console.log(err)
            res.status(500).json({
                message: "error! "
            })
        })
}





exports.delete = (req, res) => {
    const contId = req.params.id
    User.findOneAndDelete({ _id: contId }).then(User => { res.send(User) })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "ERROR!" })
        })
}


exports.FindAll = (req, res) => {
    User.find()
        .then(result =>
            res.status(200).json((result)))
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "Error Occured"
            })

        })
}