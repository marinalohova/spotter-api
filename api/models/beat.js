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
            type: DataTypes.STRING,
        },
        cameraAngle: {
            allowNull: true,
            type: DataTypes.ENUM('Pan', 'Tilt', 'Zoom', 'POV', 'CU', 'LS', 'MS'),
        },
        deletedAt: DataTypes.DATE,
    });

    return Beat;
};
