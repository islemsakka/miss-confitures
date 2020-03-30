module.exports = (app) => {
    const Event = require('../controllers/event.controller');

    app.post("/add_event", Event.create);

    app.get("/find_event/:id", Event.FindID);

    app.get("/find_events/", Event.FindAll);

    app.put('/update_event/:id', Event.Update)

    app.delete('/delete_event/:id', Event.delete)


}