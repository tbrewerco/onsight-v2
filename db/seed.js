let faker = require("faker")

module.exports =
    `
    INSERT INTO gyms SET
    name='test',
    address_street='sdlkfj',
    address_city='sdlkfj',
    address_state='sdlkfj',
    address_zip='80125',
    address_coordinates=ST_PointFromText('POINT(-40 -3)'),
    has_boulders='yes',
    has_sport_routes='yes',
    has_auto_belays='yes'
    `