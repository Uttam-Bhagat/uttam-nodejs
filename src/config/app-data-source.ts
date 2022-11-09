import { DataSource, DataSourceOptions } from 'typeorm';
const envs = require('../../config/environment-config');
const { dbHost,dbName, dbUserName, dbPassword, dbPort} = envs;

const ORMConfig: DataSourceOptions = {
    type: 'postgres',
    host: dbHost,
    port: Number(dbPort),
    username: dbUserName,
    password: dbPassword,
    database: dbName,
    entities: [__dirname + '/../entity/*.entity.ts'],
    logging: false,
    synchronize: true
}

export const patientDataSource = new DataSource(ORMConfig);