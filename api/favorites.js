module.exports = (req, res) => {
  res.status(200).json({
    books: [{rank: 1, name: 'Failure of Nerve', author: 'Edwin Friedman'}],
    movies: [{rank: 1, name: 'Superman'}],
    food: [{rank: 1, name: 'Donuts'}],
  })
}