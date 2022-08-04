
module.exports = {
    HOST: "orbitlocal.cx75d03peveh.us-east-2.rds.amazonaws.com",
    USER: "root",
    PASSWORD: "roottoor",
    DB: "test",
    dialect: "mysql",
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10
    },
}

