export default (sequelize, DataTypes) => {
    const Act = sequelize.define('acts', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        description: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
    });

    Act.associate = (models) => {
        Act.Beats = Act.hasMany(models.beats, { onDelete: 'CASCADE', });
    }

    return Act;
};