/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('images').del();
    await knex('images').insert([
      {
        id: '3d7e7c31-d5d2-4c1a-b8de-64b6248c7a77',
        document_id: '9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3',
        image_url: 'http://localhost:8080/images/3d7e7c31-d5d2-4c1a-b8de-64b6248c7a77.jpg',
        image_order: 1,
        image_title: 'Gianni\'s Pizza',
        image_description: 'Best deep dish in town!',
        image_lat: "41 deg 53' 30.81\" N",
        image_long: "87 deg 37' 13.77\" W",
        image_date: '2022:10:05 16:12:33',
      },
      {
        id: '5aabb056-5e04-4881-a40b-c3f2de8ab4b7',
        document_id: '9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3',
        image_url: 'http://localhost:8080/images/5aabb056-5e04-4881-a40b-c3f2de8ab4b7.jpg',
        image_order: 2,
        image_title: 'Mexi Brunch',
        image_description: 'Great Mexican fusion brunch spot',
        image_lat: "41 deg 53' 30.81\" N",
        image_long: "87 deg 37' 13.77\" W",
        image_date: '2022:10:01 16:12:33',
      },
      {
        id: 'a428a318-d343-4bcb-a1da-423c7336ea1e',
        document_id: '9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3',
        image_url: 'http://localhost:8080/images/a428a318-d343-4bcb-a1da-423c7336ea1e.jpg',
        image_order: 3,
        image_title: 'Noir',
        image_description: 'Nice variety of cocktails',
        image_lat: "41 deg 53' 30.81\" N",
        image_long: "87 deg 37' 13.77\" W",
        image_date: '2022:10:02 16:12:33',
      },
      {
        id: 'f88631f8-dfb4-4a1a-903d-305f93a62d14',
        document_id: '9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3',
        image_url: 'http://localhost:8080/images/f88631f8-dfb4-4a1a-903d-305f93a62d14.jpg',
        image_order: 4,
        image_title: 'Get Crackin\'',
        image_description: 'Classic brunch spot',
        image_lat: "41 deg 53' 30.81\" N",
        image_long: "87 deg 37' 13.77\" W",
        image_date: '2022:10:07 16:12:33',
      },
      {
        id: 'fdf861bf-2e80-42f9-b794-fca55cff3fe2',
        document_id: '9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3',
        image_url: 'http://localhost:8080/images/fdf861bf-2e80-42f9-b794-fca55cff3fe2.jpg',
        image_order: 5,
        image_title: 'Konnichiwa Ramen',
        image_description: 'Excellent ramen for a cold day :)',
        image_lat: "41 deg 53' 30.81\" N",
        image_long: "87 deg 38' 40.90\" W",
        image_date: '2022:10:04 16:12:33',
      },
    ]);
  };
  