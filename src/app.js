const express = require('express'); 

class App { 
    constructor() { 
        this.server = express();
    }
}

module.exports = new App().server; 





