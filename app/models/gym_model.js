const gymRepo = require("../repositories/gym_repo");

module.exports = class Gym {
    constructor(name, addressStreet, addressCity, addressState, addressZip, addressCoordinates, hasBoulders, hasSportRoutes, hasAutoBelays, photoUrl, createdBy, isDeleted) {
        this.name = name;
        this.addressStreet = addressStreet;
        this.addressCity = addressCity;
        this.addressState = addressState;
        this.addressZip = addressZip;
        this.addressCoordinates = addressCoordinates;
        this.hasBoulders = hasBoulders;
        this.hasSportRoutes = hasSportRoutes;
        this.hasAutoBelays = hasAutoBelays;
        this.photoUrl = photoUrl;
        this.createdBy = createdBy;
        this.isDeleted = isDeleted;
    }

    // create

    // get all
    static findAll = async (req, res) => {
        try {
            const gyms = gymRepo.findAllGyms();
            return gyms;
        } catch (error) {
            throw new Error("Model error: " + error.message);
        };
    };

    // get all by attribute (id, has_whatever, etc...)

    // update

    // delete

};