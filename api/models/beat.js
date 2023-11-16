export default (sequelize, DataTypes) => {
    const Beat = sequelize.define('beats', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        actId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        description: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        duration: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        cameraAngle: {
            allowNull: false,
            type: DataTypes.ENUM('Pan', 'Tilt', 'Zoom', 'POV', 'CU', 'LS', 'MS'),
        },
    });

    return Beat;
};
