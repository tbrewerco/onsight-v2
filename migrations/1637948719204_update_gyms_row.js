module.exports = {
    "up": "UPDATE gyms SET address_coordinates=ST_PointFromText('POINT(39.728808013920236 -105.2075769497465)') WHERE id = 14",
    "down": ""
}