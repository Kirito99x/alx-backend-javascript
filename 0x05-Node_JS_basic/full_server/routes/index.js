import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Binds routes to appropriate handler in the
 * given Express application.
 * @param {Express} app Express application.
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
