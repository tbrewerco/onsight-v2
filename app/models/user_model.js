module.exports = (sequelize, Seqeulize) => {
    const User = sequelize.define("user", {
        username: {
            type: Seqeulize.STRING
        },
        given_name: {
            type: Seqeulize.STRING
        },
        family_name: {
            type: Seqeulize.STRING
        },
        email: {
            type: Seqeulize.STRING
        },
        password: {
            type: Seqeulize.STRING
        },
        profile_photo_url: {
            type: Seqeulize.STRING
        },
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    });
    return User;
}
