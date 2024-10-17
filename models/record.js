const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Record = sequelize.define('Record', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  patientId: { type: DataTypes.UUID, allowNull: false, references: { model: User, key: 'id' } },
  doctorId: { type: DataTypes.UUID, allowNull: true, references: { model: User, key: 'id' } },
  description: { type: DataTypes.TEXT, allowNull: false },
  status: { type: DataTypes.ENUM('pending', 'reviewed'), defaultValue: 'pending' },
}, { timestamps: true });

module.exports = Record;
