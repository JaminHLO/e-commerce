const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// use async arrow function to enable await for get all categories
router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      // be sure to include its associated Products
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// use async arrow function to enable await for get category by id
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
  const categoryData = await Category.findByPk(req.params.id, {
  // be sure to include its associated Products
    include: [{ model: Product }],
  });
  // if not found, throw 404 error and return
  if (!categoryData) {
    res.status(404).json({ message: 'No category found with that id!' });
    return;
  }
  res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// use async arrow function to enable await for create category
router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch(err){
    res.status(400).json(err);
  }
});

// use async arrow function to enable await for update category by id
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update({
      // update fields based on data attached to request body
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    });
    // if not found, throw 404 error and return
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// use async arrow function to enable await for delete category by id
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    // if not found, throw 404 error and return
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
