const PlayerController = require('../controllers/Player.controller');
module.exports = function(app){
    app.post('/api/player', PlayerController.createPlayer);
    app.get('/players/list', PlayerController.getAllPlayers);
    app.get('/players/:id', PlayerController.getPlayer);
    app.delete('/players/:id', PlayerController.deletePlayer);
}