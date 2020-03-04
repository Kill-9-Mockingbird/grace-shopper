// if you have commented out code inside of any files to remove them from master and place them inside of some working branch

// const router = require('express').Router()
// const {Experience, Celebrity} = require('../db/models')
// module.exports = router

// router.get('/', async (req, res, next) => {
//   try {
//     const celebrities = await Experience.findAll({
//       include: {
//         model: Celebrity,
//         as: 'celebrity'
//       }
//     })
//     res.json(experiences)
//   } catch (err) {
//     next(err)
//   }
// })

// router.get('/:experienceId', async (req, res, next) => {
//   try {
//     const experienceId = req.params.experienceId
//     const singleExperience = await Experience.findByPk(experienceId)
//     res.json(singleExperience)
//   } catch (error) {
//     next(error)
//   }
// })
