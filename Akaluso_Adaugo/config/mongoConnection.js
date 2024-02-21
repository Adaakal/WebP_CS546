import {MongoClient} from 'mongodb';
import {mongoConfig} from './settings.js';
const mongoConfig = settings.mongoConfig;

let _connection = undefined;
let _db = undefined;

export const dbConnection = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(mongoConfig.serverUrl, {useNewUrlParser: true, useUnifiedTopology: true
    });
    _db = await _connection.db(mongoConfig.database);
  }

  return _db;
};

export const closeConnection = async () => {
  await _connection.close();
};