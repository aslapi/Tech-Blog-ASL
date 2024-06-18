const express = require('express');
const router = express.Router();

const userRoutes = require('./user');
const postRoutes = require('./post');
const commentRoutes = require('./comment');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);  
router.use('/comments', commentRoutes);

// router.get('/', (req, res) => {
//     res.render('homepage');
// });

module.exports = router;
