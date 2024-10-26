const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/hash', (req, res) => {
    const { index, data, previousHash, nonce } = req.body;

    // Concatenate block information to form a string for hashing
    const blockData = `${index}${previousHash}${data}${nonce}`;
    
    // Calculate the SHA-256 hash
    const hash = crypto.createHash('sha256').update(blockData).digest('hex');
    
    res.json({ hash });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
