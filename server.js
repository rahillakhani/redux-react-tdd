const express = require('express');
const app = express();
const port = 4000;

app.use(express.static('public')); 
app.get('/', (req, res) => {
 res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(port, () => {
 console.log(`listening on ${port}`);
});
