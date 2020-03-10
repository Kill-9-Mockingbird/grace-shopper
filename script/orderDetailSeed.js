const faker = require('faker')

let orderDetailSeed = []

for (let i = 0; i < 50; i++) {
  orderDetailSeed.push({
    orderId: faker.random.number({min: 1, max: 38}),
    experienceId: faker.random.number({min: 1, max: 27}),
    packageQty: faker.random.number({min: 1, max: 6})
  })
}

module.exports = orderDetailSeed

// console.log(orderDetailSeed)

// const getPrice = (ar) => {
//   return Promise.all(ar.map(async(obj) => {
//     try {
//       const experience = await Experience.findByPk(obj.experienceId)
//       if (experience) {
//         obj.totalCost = experience.price
//       }
//       console.log(obj)
//       return obj
//     } catch(err) {
//       console.log(err)
//     }
//   }))
// }

// let ass = getPrice(orderDetailSeed)

// console.log(ass)
// const allExperiences = await Experience.findAll()

// console.log(allExperiences)

// let orderDetailsAr = allOrders.map(async(order) =>{
//   const orderDetailObj = {
//     orderId: order.id
//   }
//   console.log(orderDetailObj)
// })

// console.log(orderDetailsAr)

// // // const allExperiences = getAllExperiences().then(res => res);
// // const generateOrderDetails = async () => {
// //   const allOrders = await Order.findAll();
// //   const allExperiences = await Experience.findAll();

// //   let orderDetailsAr = allOrders.map(order => {

// //     //build our orderDetailObject
// //     const orderDetailObj = {
// //       orderId: order.dataValues.id,
// //     };

// //     const randomExp = allExperiences[
// //       faker.random.number({min: 0, max: allExperiences.length - 1})
// //     ];

// //     orderDetailObj.experienceId = randomExp.dataValues.id;
// //     orderDetailObj.packageQty = faker.random.number({min: 1, max: 6})
// //     orderDetailObj.totalCost = (
// //       randomExp.dataValues.price * orderDetailObj.packageQty
// //     );
// //     // console.log(orderDetailObj)
// //     return orderDetailObj;
// //   });
// //   console.log(orderDetailsAr)
// //   return orderDetailsAr
// // };
// // // debugger

// // const orderDetailSeed = generateOrderDetails()
// // console.log(orderDetailSeed)
// // .then(res =>  {
// //   debugger
// //   return res
// // } );
// // allOrders
// // async function getPrice(orderAr) {
// //   return await Promise.all(orderAr.map(async order => {
// //     const experience = await Experience.findAll({
// //       where: {
// //         id: order.experienceId
// //       }
// //     })
// //     order.totalCost = experience.price * order.packageQty
// //   }))
// // }

// // let orderDetailSeed = getPrice(orderDetailAr)

// let orderDetailSeed = orderDetailAr.forEach(async(order) => {
//   console.log(order)
//   try {
//     const experience = await Experience.findAll({
//       where: {
//         id: order.experienceId
//       }
//     })
//     order.totalCost = experience.price * order.packageQty
//   } catch(err) {
//     console.log(err)
//   }
// })

// // console.log(orderDetailSeed)

// module.exports = orderDetailSeed
