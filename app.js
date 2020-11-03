const express = require('express');
    const app = express();
    
    const host = '127.0.0.1';
    const port = 7000;
    
    app.use('/uploads', express.static(`${__dirname}/assets/images`));
    
    app.listen(port, host, function () {
     console.log(`Server listens http://${host}:${port}`);
    });