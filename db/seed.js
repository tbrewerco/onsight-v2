let faker = require("faker")

let yesNoArray = ['yes', 'no'];
let randomIndex = Math.floor(Math.random() * yesNoArray.length);
let yesNoAnswer = yesNoArray[randomIndex];

module.exports =
{
    gym:
        `
            INSERT INTO gyms SET
            name='Boulder Rock Club',
            address_street='2829 Mapleton Ave',
            address_city='Boulder',
            address_state='CO',
            address_zip='80301',
            address_coordinates=ST_PointFromText('POINT(40.02657763618593 -105.2567590576728)'),
            has_boulders='yes',
            has_sport_routes='yes',
            has_auto_belays='yes'
        `,
    climbing_route:
        `
            INSERT INTO climbing_routes SET
            name='${faker.commerce.productName()}',
            is_top_rope='${yesNoAnswer}',
            is_auto_belay='${yesNoAnswer}',
            is_lead_climb='${yesNoAnswer}',
            is_boulder='no',
            is_boulder_or_rope_climb='rope',
            hold_color='${faker.commerce.color()}',
            setter_grade=${Math.floor(Math.random() * 18 + 1)},
            gym_id= 15
        `,

    user:
        `
            INSERT INTO users SET
            username='${faker.internet.userName()}',
            given_name='${faker.name.firstName()}',
            family_name='${faker.name.lastName()}',
            role='user',
            email='${faker.internet.email()}',
            password='${faker.internet.password()}',
            profile_photo_url='${faker.internet.avatar()}'
        `,

    tick:
        `
            INSERT INTO ticks SET
            comment='${faker.lorem.sentence()}',
            did_send='${yesNoAnswer}',
            did_flash='${yesNoAnswer}',
            did_onsight='${yesNoAnswer}',
            quality_rating='${faker.datatype.number({ min: 1, max: 5 })}',
            difficulty_grade='${faker.datatype.number({ min: 1, max: 19 })}',
            gym_id='15',
            route_id='${faker.datatype.number({ min: 26, max: 50 })}',
            user_id='${faker.datatype.number({ min: 20, max: 24 })}'
        `
};