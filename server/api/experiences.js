const router = require('express').Router()
const {Experience, Celebrity} = require('../db/models')
const {isAdmin} = require('../../utils')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const experiences = await Experience.findAll({
      include: {
        model: Celebrity
      }
    })
    if (experiences) {
      res.json(experiences)
    } else {
      res.status(404).send('Product not found!')
    }
  } catch (err) {
    next(err)
  }
})

router.get('/:experienceId', async (req, res, next) => {
  try {
    const experienceId = req.params.experienceId
    const singleExperience = await Experience.findByPk(experienceId, {
      include: {
        model: Celebrity
      }
    })
    if (singleExperience) {
      res.json(singleExperience)
    } else {
      res.status(404).send('Product not found!')
    }
  } catch (error) {
    next(error)
  }
})

router.post('/', isAdmin, async (req, res, next) => {
  try {
    if (req.body) {
      const experience = await Experience.create(req.body)
      res.status(201).json(experience)
    } else {
      res.status(404).send('No product was added!')
    }
  } catch (error) {
    next(error)
  }
})

router.put('/:experienceId', isAdmin, async (req, res, next) => {
  try {
    const experienceId = req.params.experienceId
    const experience = await Experience.findByPk(experienceId)
    if (experience) {
      res.json(await experience.update(req.body))
    } else {
      res.status(404).send('Product not found!')
    }
  } catch (error) {
    next(error)
  }
})

router.delete('/:experienceId', isAdmin, async (req, res, next) => {
  try {
    const experienceId = req.params.experienceId
    const experience = Experience.findByPk(experienceId)
    if (experience) {
      res.status(200).json(await experience.destroy())
    } else {
      res.status(404).send('Product not found!')
    }
  } catch (error) {
    next(error)
  }
})
