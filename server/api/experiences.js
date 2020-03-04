const router = require('express').Router()
const {Experience, Celebrity} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const experiences = await Experience.findAll({
      include: {
        model: Celebrity,
        as: 'celebrity' // no longer need this
      }
    })
    res.json(experiences)
  } catch (err) {
    next(err)
  }
})

router.get('/:experienceId', async (req, res, next) => {
  try {
    const experienceId = req.params.experienceId
    const singleExperience = await Experience.findByPk(experienceId, {
      include: {
        model: Celebrity,
        as: 'celebrity'
      }
    })
    res.json(singleExperience)
  } catch (error) {
    next(error)
  }
})
