// get all require module
const express = require('express');
const projectController = require('../controllers/project_controller');
const router = express.Router();

// route all the require page
router.post('/create', projectController.createSession);
router.get('/delete', projectController.delete);
router.get('/:id', projectController.projectDetails);
router.post('/:id', projectController.createIssueSession);
router.get('/issue/delete', projectController.deleteIssue);

module.exports = router;