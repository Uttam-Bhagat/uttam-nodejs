const dotenv = require('dotenv');
// console.log("NODE_ENV:", process.env.NODE_ENV)
const result = dotenv.config({path: `./config/${process.env.NODE_ENV}.env`});
if(result.error) {
    throw result.error;
}
const { parsed: envs } = result;

module.exports = {
    port: envs.PORT,
    environment: envs.environment,
    dbHost: envs.dbHost,
    dbUserName: envs.dbUserName,
    dbPassword: envs.dbPassword,
    dbName: envs.dbName,
    dbPort: envs.dbPort
}