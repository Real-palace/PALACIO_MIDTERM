const express = require('express');
const app = express();
const PORT = 3000;

app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Real Jhon S. Palacio' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});