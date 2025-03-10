const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false });

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});

sequelize.sync().then(() => {
    console.log('Database synced');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});