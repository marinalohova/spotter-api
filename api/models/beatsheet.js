export default (sequelize, DataTypes) => {
    const Beatsheet = sequelize.define('beatsheets', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    }, { timestamps: false });

    Beatsheet.associate = (models) => {
        Beatsheet.Acts = Beatsheet.hasMany(models.acts, { onDelete: 'CASCADE', });
    }

    return Beatsheet;
};
