const faker = require('faker')
faker.seed(123)
const experienceSeed = [
  {
    name: 'Kayak the Florida Keys',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      "In the Florida Keys, you can kayak everywhere! You're in the Caribbean around a bunch of cool islands, what more could you want?!",
    imageUrl: 'https://kokatat.com/images/550marquees/B_florida_keys-1-19.jpg',
    city: 'Key West',
    state: 'Florida',
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 2
  },
  {
    name: 'Swim in Belize',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      'Glover’s Reef is one of three atolls outside of the Belize Barrier Reef. Located on the reef ring of the atoll is Long Caye, the jewel of Belize’s islands. On the rocky side of the island ocean swells crash on the shore, but on the lee side of the island lies one of the best beaches in Belize. This 800 foot long beach is shaded by palms with only 2 docks and almost no boat traffic breaking the beauty of this fabulous idyll. Long Caye has the best snorkeling in Belize from shore, and there are even more if you choose to kayak a few minutes.',
    imageUrl:
      'https://www.slickrock.com/wp-content/uploads/2018/05/long-caye-belize-resort-800w.jpg',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 2
  },
  {
    name: 'Tea Party',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      'Upon arrival, each guest is greeted with a glass of champagne or sparkling cider. A vintage style "Tea Party" is set and one of our knowledgeable Candy Shop Vintage team members will welcome you, pass out the champagne and give you an introduction to both the shop, some of our special vintage pieces, our popular Charleston Rice Beads and how they are made, as well as a brief history of the neighborhood and its local shopping scene.\nGuests will then have the opportunity to indulge in a a cup of Charleston Tea and a number of complimentary sweets sourced from local bakeries as you shop, socialize and take photos. One of our team members will discuss the history of some of our vintage pieces in the shop and answer any questions about Charleston as well as make suggestions about ways to explore the city like a local. The entire party will enjoy 15% off on anything purchased during the event and leave with a gift bag as a souvenir of there time with us, including some samples of Charleston Tea, their very own tea cup as well as a hand drawn map of the neighborhood. Due to the small size of our shop, we can only accept the number of guests pre-paid and designated by your booking.',
    imageUrl:
      'https://a0.muscache.com/im/pictures/12c3fddd-9781-466d-a89c-769eec29841c.jpg?aki_policy=exp_md',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 2
  },
  {
    name: 'Brunch in the Jungle',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      'Take a break and boost your energy levels on your way to the ruins of Coba or after a dive in Gran Cenote! Surrounded by trees and only 5 km away from Tulum town, enjoy a delicious healthy brunch in the jungle, including tea or traditional Mexican coffee, raw veg open sandwich, fruit salad, and healthy juice.',
    imageUrl:
      'https://a0.muscache.com/im/pictures/360e935a-7da4-469f-afcf-07231c5520ba.jpg?aki_policy=exp_xl',
    city: 'Tulum',
    state: 'Mexico',
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 1
  },
  {
    name: 'Explore Mars',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      'Always wanted to cruise around on the surface of another planet? Well, you’re in luck! In Explore Mars, you will be driving a rover on Mars and collecting information about Martian rocks. First, you will choose a rock to investigate. Then, you’ll send a sequence of commands telling the rover how to get to that rock. Don’t forget to include the command to analyze the rock! This information will then be sent back to scientists on Earth. You will earn points every time you successfully analyze a new Martian rock. If you want a high score, plan carefully. Some rocks are worth many more points than others!',
    imageUrl:
      'https://i.insider.com/5d24c2d4a17d6c0c722860c3?width=1100&format=jpeg&auto=webp',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 1
  },
  {
    name: 'Conquer Antarctica',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      "Visit Torres del Paine National Park free of crowds in Patagonia's winter season. Spot puma tracks as you trek to the base of rock towers covered in snow. Explore the massive and beautiful Grey Glacier",
    imageUrl:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1172251-media_library/original/d2720a8b-d840-484e-bcb5-eed06222e042.jpeg?aki_policy=exp_md',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 1
  },
  {
    name: 'Make Pie',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      'We are the ultimate French foodlovers & 100% passionate about our culture. We created "Foodies in Paris", so that we could share some truly unique moments with other like-minded devotees like yourselves. We were lucky enough to be able to learn how to cook traditional French dishes from our grandmothers and that’s how we acquired our passion for cakes & pastries!',
    imageUrl:
      'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco/k%2FPhoto%2FRecipes%2F2019-06-How-to-Make-Cherry-Pie-with-Fresh-Summer-Cherries%2FHow-to-Make-Easy-Foolproof-Cherry-Pie-with-Fresh-Summer-Cherries_038',
    city: 'Paris',
    state: 'France',
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 3
  },
  {
    name: 'Ski the Alps',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      'Join Gauthier, a certified ski instructor who continues a burning passion for the snow-filled mountains. He’s constantly seeking fresh spots to explore and share, and strives to offer unparalleled adventures. Core to the principles of Elis is to build long-lasting relationships with fellow adventurers, and always ensuring your safety while in the scenic alpine mountains. Gauthier will be your prime point of contact during the booking process, helping to answer any questions or queries that you may have.',
    imageUrl:
      'https://assets3.thrillist.com/v1/image/2834438/size/tmg-article_default_mobile.jpg',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 3
  },
  {
    name: 'Sing Karaoke in Berlin',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      "First we'll meet to get to know each other and have a drink. I can also show you my favorite spots around the area. Then we will go to the karaoke place together. I can teach you some German songs if you'd like and we can sing together. If you want, I will also invite some of my friends. The more, the merrier (and messier..)!",
    imageUrl:
      'https://img.grouponcdn.com/iam/3FkUyx71LJ5GW5TmJFekHjzTE1nB/3F-2048x1229/v1/c700x420.jpg',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 3
  },
  {
    name: 'Explore a Hidden Indonesian Waterfall',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      'This experience would take you to one of the most beautiful parts of the island of Bali. First we will come meet at your hotel to pick  you up to take you to Ubud Bali. I will take you to explore hidden waterfall in Bali, and other place in Bali.',
    imageUrl:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1135473-media_library/original/8a9f1747-5bb7-4066-8522-4cbfa1cc8d2e.png?aki_policy=exp_md',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 4
  },
  {
    name: "Get Slime'd",
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      'Welcome to SLIME CITY, the ooiest, gooiest place on Earth! You’re about to SEE SLIME, FEEL SLIME, and maybe even GET SLIMED – Nickelodeon’s highest honor! Hang at SLIME HQ, dance at the SLIME LIGHT CLUB, soak in all the Slimy green goodness, and SO MUCH MORE at the ultimate Slime experience! So, get ready. We’re bringing the SLIME... Big Time!',
    imageUrl:
      'https://media-cdn.tripadvisor.com/media/photo-s/18/e4/ce/04/nickelodeon-slime-city.jpg',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 4
  },
  {
    name: 'Play With Shiba Inus',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      'This is the best place to go to when you love puppies and dogs!! Play with Shiba inu young and not so young, they are very cute! for 1,200yen you will have your choice of drink and 30mins to play with the dogs!',
    imageUrl:
      'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/10/16145025/FTeam_and_Sire_Clean-min-min.jpg',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 4
  },
  {
    name: 'Go Back in Time',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      'Take a trip in your very own TARDIS to explore the depths of time and space!',
    imageUrl: 'https://ichef.bbci.co.uk/images/ic/480xn/p04znpm3.jpg',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 5
  },
  {
    name: 'Arrange Flowers',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      "The workshop aims to create harmonious and balanced photographic compositions with the beautiful plants, flowers and accessories made available by the Vivaio F.lli Sgaravatti, a special and enchanting place where our workshop will take place. You will learn which lighting methods can create the magic of a classic and timeless still life image. Through a practical exercise you will discover how to arrange the precious accessory objects (props) to enrich the composition and guide the observer's attention towards the subject protagonist of the image. Following the workshop you will be able to reproduce all the conditions to give your photographic compositions an elegant and classic style.",
    imageUrl:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1008022-media_library/original/f22e3a22-8773-4f54-8065-a819c54b1c62.jpeg?aki_policy=exp_md',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 5
  },
  {
    name: 'Catch a Legendary Pokemon',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      "Zaptos? Articuno? Mewtwo? Who knows which Pokemon you'll find on this thrilling adventure to make one of these pocket monsters yours!",
    imageUrl:
      'https://cdn.bulbagarden.net/upload/a/aa/2018_Legendary_Pokemon_Distributions_artwork.png',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 5
  },
  {
    name: 'Visit a pig sanctuary',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      'We start with giving you a complimentary Pig Luv Co. T-shirt, so you fit in with the Pig Luv Co. crew! Then we begin with a brief introduction of how our Rescue and Sanctuary came to be, then we will do a meet and greet of our 30+ Sanctuary pigs. We will walk the property and you will learn what it takes to care for, network, feed, house and socialize mini-pigs as well as KuneKune Pigs. You’ll assist in cutting up vegetables for lunch, and feeding! After, we will have either a cheese or fruit tray with beverage waiting for you. Following your snack you’ll be able to wander our property, take pictures, play cornhole and meet our resident miniature donkeys and tortoises!',
    imageUrl:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1409241-media_library/original/253f4b64-3605-4894-9452-c9a3a225198a.jpg?aki_policy=exp_md',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 6
  },
  {
    name: 'Bring the Ring to Mordor',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      'The fate of Middle Earth depends on you! Starting in the Hobbiton home of the Shire, take the harrowing journey through beautiful but treacherous terrain on the way to Mordor. Band together with Aragorn, Legolas, Gimli, Gandalf and of course your Hobbit comrades as you fight for the future of the world.',
    imageUrl:
      'https://lh3.googleusercontent.com/proxy/ZstUPY8dZUJlMHbZAJMUy46W8Fyg9mqGHw80EbzZUHdnuQir1J8NUmG-1eQCKA2kYIHEZbJQEMYhNnozSFMCUlqLnSh-jmUugGH5ZHSz9wiTf_7pQcUTqumv1DVu1EK-zi0jsTITnjDHpaOTPzg6n34Z8uaCRA-rtbA',
    city: 'The Shire',
    state: 'Middle Earth',
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 10
  },
  {
    name: "Flip over James Cordon's Car",
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description: 'He had it coming.',
    imageUrl:
      'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200124105026-james-corden-carpool-karaoke.jpg',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 6
  },
  {
    name: 'Meet President Barack Obama',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      'As the first African-American elected President of the United States, Barack Obama became a pivotal figure in American history even before his inauguration. But after winning a second term in 2012, his achievements in office have made him one of the most transformative presidents of the past hundred years. He took office with a country in peril and led it through the Great Recession, two wars, civil unrest, a rash of mass shootings, and changing cultural demographics. In the 2008 campaign he called for change and eight years later we are living in a more prosperous country because of it.',
    imageUrl:
      'https://blackfacts.com/uploads/blackfacts/facts/fthmb.tqn.com/lApg0nfLe9PqL5rSwFV6d7hLFMw-/300x301/filters-fill-auto-1-/about/obama-sunglasses-56a751eb3df78cf772948bb5.jpg',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 9
  },
  {
    name: 'Explore an Active Volcano',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      'We will start the experience with a general review, plan it and the rules to minimize any risk of the team, assigning roles. We will make an "Approach" walk to the San José Volcano, a massif of the Andes mountain range of 5856 masl, located in the Cajon del Maipo and with spectacular glaciers. We will visit the Engorda Valley for its approach, starting an ascent hike until we reach the "Plantat Refuge", a mountain refuge built in 1931 that is a must to be visited given its history. We will finish the ascent on the summit of the San Josecito hill, reaching a height of approximately 3300 masl, with wonderful views of the valley, volcano, glaciers and Andean massifs. To end the experience we will hold a session of collective gratitude to the "Universe" where we will seek to meet our inner Being in the heart of the Central Andes.',
    imageUrl:
      'https://www.funkidslive.com/wp-content/uploads/2012/08/Volcano-2.jpg',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 7
  },
  {
    name: 'Storm Buckingham Palace',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      "Storm of Buckingham palace to cease what secrets the queen is hiding. They can't catch us all.",
    imageUrl:
      'https://c8.alamy.com/comp/BDX3GG/london-buckingham-palace-in-the-snow-BDX3GG.jpg',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 8
  },
  {
    name: "Perform the Musical 'Cats'",
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      'Sing, dance, and meow your way through this ultra modern hip hop adaptation.',
    imageUrl:
      'https://media.gq.com/photos/599f4234e1370b2557f0d215/16:9/w_1280,c_limit/2017-08_GQ_Jay-Z-Puma_3x2.jpg',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 11
  },
  {
    name: 'Have a Magical Duel',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      "She's no princess - Lady Gaga once joked that she couldn't be a Disney Princess because they don't have one that's covered in blood. Luckily for us, she's on our side.",
    imageUrl:
      'https://insidethemagic-119e2.kxcdn.com/wp-content/uploads/2011/04/lady-gaga-evil-queen.jpg',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 12
  },
  {
    name: 'Play with Monkeys',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      "Get a behind the scenes look at chimpanzees living in sanctuary in the Blue Ridge Mountains! This is a unique opportunity to see some of the chimpanzees and learn about their unique life in sanctuary. Because we aren't a zoo, you'll see the chimps in a relaxed, peaceful setting, unlike anything you've experienced before. The chimps have access to a 6-acre forest and, while chimp sightings are never guaranteed, they usually like to see who has come to visit!",
    imageUrl:
      'https://hereandnowresorts.files.wordpress.com/2013/05/img_0404.jpg',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 10
  },
  {
    name: 'Go to Hogwarts',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      'Enter two lands of groundbreaking thrills and magical fun on the streets of Diagon Alley where hidden dangers lurk far beneath Gringotts bank. Travel to the village of Hogsmeade and into Hogwarts castle for a spellbinding journey through the skies. Come experience the wizarding world like never before–joining Hagrid™ to fly far beyond the grounds of Hogwarts castle, deep into the wild of the Forbidden Forest, to discover rare magical creatures on an all-new thrilling roller coaster adventure.',
    imageUrl: 'https://i.ytimg.com/vi/rJsNPOTZjZw/maxresdefault.jpg',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 10
  },
  {
    name: 'Tour Wine Country',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      "After popular demand for MORE-- we have expanded our Wine + Cheese Paring Party (1,000 5-Stars in <1 year!) Check out Our NEW (old) CAVE--a rare relic of 13th century French Gothic architecture we call 'the Cathedral'. Name drop: Mozart was here. And King Louis XIV. Bring your appetite for adventure to Paris' Historic District--Le Marais--where French fashion, history, & food intersect. We'll toast + enjoy amazing wines, some Natural & Biodynamic (lol don't worry, they are good now ;p ) We are experts in wine + cheese but we aren't here to bust out powerpoints and maps and talk about tannins for half an hour. We prefer what is special/  funny/scandalous in the world of wine. And the cool history of our cave! We like to connect people for a relaxed + fun time tasting crazy delicious French things. ",
    imageUrl:
      'https://i.pinimg.com/originals/03/bc/a5/03bca57cb4ef77feeef0f942deefafed.jpg',
    city: faker.address.city(),
    state: faker.address.state(),
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 9
  },
  {
    name: 'Become a Mountie',
    inventory: faker.random.number(100),
    groupSize: faker.random.number({min: 1, max: 6}),
    description:
      "The Royal Canadian Mounted Police force are synonymous with Canada and their iconic red uniform is famous the world over. During your holiday to Canada you can see Mounties on patrol or even performing in their famous Musical Ride, so it might be worth brushing up on your knowledge of the force. The Mounties provide an array of services from municipal policing to national security intelligence gathering. But despite their prestigious history dating back to 1867, there are many things people don't know about this famous police force. Did you know, for example, that the last dog sled patrol took place in 1969? Or that a Mounties’ boots need 25 hours of polishing before they are shiny enough? To learn more about the Canadian Mounties before your holiday, take a look at the infographic below. It’s full of facts about the Mounties’ extensive history and tells you everything you need to do to become a fully-qualified Canadian Mountie. So, do you think you have what it takes?",
    imageUrl:
      'https://gagadaily.com/uploads/stories/monthly_2017_11/lady-gaga-jwt-montreal.jpg.7b1debebc10a9328921c42f61cf5b01d.jpgsa',
    city: 'Ottowa',
    state: 'Canada',
    duration: faker.random.number(10),
    price: faker.commerce.price(50, 10000, 2, ''),
    celebrityId: 12
  }
]

module.exports = experienceSeed
