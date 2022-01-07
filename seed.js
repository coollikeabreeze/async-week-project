const { green, red } = require("chalk");
const { db } = require("./server/db");
const { User } = require("./server/db")


const seed = async () => {
  try {
    await db.sync({ force: true });

    const user1 = await User.create({
      firstName: "Ted",
      lastName: "Lasso",
      email: "tlasso@here.com",
      username: "TLasso",
      age: 45,
      country: "United States of America"
      }
    )

    const user2 = await User.create({
      firstName: "Keeli",
      lastName: "Jones",
      email: "kjones@here.com",
      username: "KJones",
      age: 31,
      country: "United Kingdom"
      }
    )

    const user3 = await User.create({
      firstName: "Sam",
      lastName: "Obisanya",
      email: "sobisanya@here.com",
      username: "SObisanya",
      age: 25,
      country: "Nigeria"
      }
    )

    const user4 = await User.create({
      firstName: "Hans",
      lastName: "Gruber",
      email: "HGruber@here.com",
      username: "HGruber",
      age: 42,
      country: "Germany"
      }
    )

    const user5 = await User.create({
      firstName: "Joseph",
      lastName: "Takagi",
      email: "JTakagi@here.com",
      username: "JTakagi",
      age: 47,
      country: "Japan"
      }
    )

    const user6 = await User.create({
      firstName: "Logan",
      lastName: "Roy",
      email: "LRoy@here.com",
      username: "LRoy",
      age: 72,
      country: "United Kingdom"
      }
    )

    const user7 = await User.create({
      firstName: "Siobhan",
      lastName: "Roy",
      email: "SRoy@here.com",
      username: "SRoy",
      age: 39,
      country: "United States of America"
      }
    )

    const user8 = await User.create({
      firstName: "Roman",
      lastName: "Roy",
      email: "RRoy@here.com",
      username: "RRoy",
      age: 33,
      country: "United States of America"
      }
    )

    const user9 = await User.create({
      firstName: "Kath",
      lastName: "Day-Knight",
      email: "KDay-Night@here.com",
      username: "KDay-Knight",
      age: 43,
      country: "Australia"
      }
    )

    const user10 = await User.create({
      firstName: "Kim",
      lastName: "Craig",
      email: "KCraig@here.com",
      username: "KCraig",
      age: 25,
      country: "Australia"
      }
    )

    const user11 = await User.create({
      firstName: "Kurt",
      lastName: "Wallander",
      email: "KWallander@here.com",
      username: "KWallander",
      age: 51,
      country: "Sweden"
      }
    )

    const user12 = await User.create({
      firstName: "Uli",
      lastName: "Kunkel",
      email: "UKunkel@here.com",
      username: "UKunkel",
      age: 47,
      country: "Sweden"
      }
    )

    const user13 = await User.create({
      firstName: "Uli",
      lastName: "Kunkel",
      email: "UKunkel@here.com",
      username: "UKunkel",
      age: 47,
      country: "Sweden"
      }
    )

    const user14 = await User.create({
      firstName: "Jamal",
      lastName: "Malik",
      email: "JMalik@here.com",
      username: "JMalik",
      age: 19,
      country: "India"
      }
    )

    const user15 = await User.create({
      firstName: "Nick",
      lastName: "Young",
      email: "NYoung@here.com",
      username: "NYoung",
      age: 19,
      country: "Singapore"
      }
    )

    const user16 = await User.create({
      firstName: "Amelie",
      lastName: "Poulain",
      email: "APoulain@here.com",
      username: "APoulain",
      age: 24,
      country: "France"
      }
    )

    const user17 = await User.create({
      firstName: "Rodion",
      lastName: "Raskolnikov",
      email: "RRaskilnikov@here.com",
      username: "RRaskilnikov",
      age: 22,
      country: "Russia"
      }
    )

    const user18 = await User.create({
      firstName: "Gregor",
      lastName: "Samsa",
      email: "GSamsa@here.com",
      username: "GSamsa",
      age: 23,
      country: "Czech Republic"
      }
    )

    // const student1 = await Student.create({firstName: 'Richard',
    // lastName: "Hendricks",
    // email: "rhendricks@mhacademy.edu",
    // imageUrl: "https://www.hollywoodreporter.com/wp-content/uploads/2016/04/richard_hendricks_screen_shot.jpg",
    // gpa: 4.0});


    // const campus1 = await Campus.create({name: 'Pied Piper',
    // address: '5230 Penfield Ave, Woodland Hills, Los Angeles, CA 91364',
    // description: 'I am Pied Piper',
    // imageUrl: "https://cdn.shopify.com/s/files/1/0537/1501/products/Pied_Piper_Square_1024x1024.jpg?v=1557517018"});


    // await student1.setCampus(campus1);

  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)

if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch(err => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
