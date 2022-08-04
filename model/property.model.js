module.exports = (sequelize, Sequelize) => {
    const property = sequelize.define("property", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        length: {
            type: Sequelize.INTEGER
        },
        width: {
            type: Sequelize.INTEGER
        }
    });
    return property;
};
