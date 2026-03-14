const express = require("express")
const router = express.Router()
const Note = require("../models/Note")

// Create Note
router.post("/", async (req, res) => {

 try {

  const { title, description, category } = req.body

  const note = await Note.create({
   title,
   description,
   category
  })

  res.status(201).json(note)

 } catch (error) {

  console.log(error)

  res.status(500).json({ message: error.message })

 }

})


// Get All Notes
router.get("/", async (req, res) => {

 try {

  const notes = await Note.find()

  res.json(notes)

 } catch (error) {

  res.status(500).json({ message: error.message })

 }

})


// Update Note
router.put("/:id", async (req, res) => {

 try {

  const note = await Note.findByIdAndUpdate(
   req.params.id,
   req.body,
   { new: true }
  )

  res.json(note)

 } catch (error) {

  res.status(500).json({ message: error.message })

 }

})


// Delete Note
router.delete("/:id", async (req, res) => {

 try {

  await Note.findByIdAndDelete(req.params.id)

  res.json({ message: "Note Deleted" })

 } catch (error) {

  res.status(500).json({ message: error.message })

 }

})

module.exports = router