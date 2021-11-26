module.exports = {
    "up": "ALTER TABLE climbing_routes ADD CONSTRAINT setter_grade_range CHECK (setter_grade BETWEEN 1 AND 20)",
    "down": ""
}