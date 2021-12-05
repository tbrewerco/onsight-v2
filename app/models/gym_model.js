const gymRepo = require("../repositories/gym_repo");
const baseRepo = require("../repositories/base_repo");
const zipcodes = require("zipcodes");
const haversine = require("haversine-distance");

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

    static getMilesFromMeters = (meters) => {
        return meters * 0.000621371192;
    };

    static getUserDistanceFromGym = (gym, userLocation) => {
        const gymCoordinates = { latitude: gym.address_coordinates.x, longitude: gym.address_coordinates.y };
        const distance = haversine(userLocation, gymCoordinates);
        gym.distanceFromUser = Math.round(this.getMilesFromMeters(distance));
    }

    static findUserDistanceWithZipCode(reqQuery, gyms) {
        if (reqQuery.zipCode && reqQuery.zipCode.length === 5) {
            const userLocation = zipcodes.lookup(reqQuery.zipCode);
            if (userLocation) {
                gyms = gyms.map(gym => {
                    this.getUserDistanceFromGym(gym, userLocation);
                    return gym;
                })
                return gyms;
            } else {
                throw new Error(error.message = "Please Enter a Valid Zip Code")
            };
        }
    };

    findUserDistanceWithCoordinates(req, gyms) {
        gyms = gyms.map(gym => {
            const userLocation = { latitude: req.query.lat, longitude: req.query.long }
            this.getUserDistanceFromGym(gym, userLocation);
            return gym;
        })
        return gyms;
    };

    static findAll = async (reqQuery) => {
        try {
            const gyms = await baseRepo.findAll("gyms");
            if (reqQuery.zipCode) {
                return this.findUserDistanceWithZipCode(reqQuery, gyms);
            }
            else if (reqQuery.lat && reqQuery.long) {
                findUserDistanceWithCoordinates(reqQuery, gyms)
            } else {
                const gyms = await baseRepo.findAll("gyms");
                return gyms;
            };
        } catch (error) {
            throw new Error("Model error: " + error.message);
        };
    };



    // get all by attribute (id, has_whatever, etc...)

    // update

    // delete

};