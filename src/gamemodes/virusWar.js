var FFA = require('./FFA'); // Base gamemode 
var Virus = require('../entity/Virus');
var GameServer = require

function VirusWar() {
    FFA.apply(this, Array.prototype.slice.call(arguments));

    this.ID = 30;
    this.name = "Virus Warfare";
    this.specByLeaderboard = true;
    
    this.colors = [
        {'r': 0, 'g': 0, 'b': 0}, // Black
        {'r': 0, 'g': 0, 'b': 42}, // Black
    ];
    this.colorsLength = this.colors.length -1;
    this.speed = 1; // Speed of color change
}

Virus.prototype.onConsume = function(consumer,gameServer) {
    gameServer.removeNode(consumer);
};

module.exports = VirusWar;
VirusWar.prototype = new FFA();