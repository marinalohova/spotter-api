export default (sequelize, DataTypes) => {
    const BeatSheet = sequelize.define('beatsheets', {
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

    BeatSheet.associate = (models) => {
        BeatSheet.hasMany(models.acts, { onDelete: 'CASCADE', });
    }

    return BeatSheet;
};
