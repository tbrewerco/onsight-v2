// const gymRepo = require("../repositories/gym_repo");
// const baseRepo = require("../repositories/base_repo");
const zipcodes = require("zipcodes");
const haversine = require("haversine-distance");

module.exports = (sequelize, Sequelize) => {
    const Gym = sequelize.define("gym", {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            notEmpty: true,
        },
        address_street: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true
        },
        address_city: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true,
            isAlpha: true,
        },
        address_state: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true,
            isAlpha: true,
        },
        address_zip: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true,
            isNumeric: true,
        },
        address_coordinates: {
            type: Sequelize.GEOMETRY('POINT', 4326)
        },
        has_boulders: {
            type: Sequelize.BOOLEAN,
            type: Sequelize.ENUM('yes', 'no'),
            allowNull: true,
            defaultValue: null
        },
        has_sport_routes: {
            type: Sequelize.BOOLEAN,
            type: Sequelize.ENUM('yes', 'no'),
            allowNull: true,
            defaultValue: null
        },
        has_auto_belays: {
            type: Sequelize.BOOLEAN,
            type: Sequelize.ENUM('yes', 'no'),
            allowNull: true,
            defaultValue: null
        },
        photo_url: {
            type: Sequelize.STRING,
            unique: true,
            validate: {
                isUrl: { msg: "Invalid URL" }
            }
        },
        created_by: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    });
    return Gym;
};

// module.exports = class Gym {
//     constructor(data) {
//         this.name = data.name;
//         this.addressStreet = data.addressStreet;
//         this.addressCity = data.addressCity;
//         this.addressState = data.addressState;
//         this.addressZip = data.addressZip;
//         this.addressCoordinates = data.addressCoordinates;
//         this.hasBoulders = data.hasBoulders;
//         this.hasSportRoutes = data.hasSportRoutes;
//         this.hasAutoBelays = data.hasAutoBelays;
//         this.photoUrl = data.photoUrl;
//         this.createdBy = data.createdBy;
//         this.isDeleted = data.isDeleted;
//     }

//     // create 
//     create = async (newGym) => {
//         try {
//             const gymId = await gymRepo.create(newGym);
//             newGym.id = gymId
//             return newGym;
//         } catch (error) {
//             throw new Error(error.message);
//         };
//     };

//     // get all gyms
//     static getMilesFromMeters = (meters) => {
//         return meters * 0.000621371192;
//     };

//     static getUserDistanceFromGym = (gym, userLocation) => {
//         const gymCoordinates = { latitude: gym.address_coordinates.x, longitude: gym.address_coordinates.y };
//         const distance = haversine(userLocation, gymCoordinates);
//         gym.distanceFromUser = Math.round(this.getMilesFromMeters(distance));
//     }

//     static findUserDistanceWithZipCode(reqQuery, gyms) {
//         if (reqQuery.zipCode && reqQuery.zipCode.length === 5) {
//             const userLocation = zipcodes.lookup(reqQuery.zipCode);
//             if (userLocation) {
//                 gyms = gyms.map(gym => {
//                     this.getUserDistanceFromGym(gym, userLocation);
//                     return gym;
//                 })
//                 return gyms;
//             } else {
//                 throw new Error(error.message = "Please Enter a Valid Zip Code")
//             };
//         }
//     };

//     static findUserDistanceWithCoordinates(reqQuery, gyms) {
//         const userLocation = { latitude: reqQuery.lat, longitude: reqQuery.long }
//         gyms = gyms.map(gym => {
//             this.getUserDistanceFromGym(gym, userLocation);
//             return gym;
//         })
//         return gyms;
//     };

//     static findAll = async (reqQuery) => {
//         try {
//             const gyms = await baseRepo.findAll("gyms");
//             if (reqQuery.zipCode) {
//                 return this.findUserDistanceWithZipCode(reqQuery, gyms);
//             }
//             else if (reqQuery.lat && reqQuery.long) {
//                 return this.findUserDistanceWithCoordinates(reqQuery, gyms)
//             } else {
//                 const gyms = await baseRepo.findAll("gyms");
//                 return gyms;
//             };
//         } catch (error) {
//             throw new Error("Model error: " + error.message);
//         };
//     };

//     // get one
//     static findOne = async (reqParams) => {
//         try {
//             const gym = await baseRepo.findByAttribute("gyms", "id", reqParams);
//             if (gym.length > 0) {
//                 return gym;
//             } else {
//                 throw new Error("No record found");
//             }
//         } catch (error) {
//             throw new Error("Model error:" + error.message);
//         };
//     };

//     // update
//     static update = async (data, id) => {
//         try {
//             await gymRepo.update(data, id);
//             return data;
//         } catch (error) {
//             throw new Error("Model error:" + error.message);
//         };
//     };

//     // delete
//     static delete = async (id) => {
//         try {
//             await baseRepo.delete("gyms", id);
//             return id;
//         } catch (error) {
//             throw new Error("Model error: " + error.message);
//         };
//     };
// };