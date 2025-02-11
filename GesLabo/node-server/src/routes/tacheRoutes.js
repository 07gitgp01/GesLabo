import {
  addNewTache,
  getTaches,
  getTacheWithID,
  updateTache,
  deleteTache,
} from "../controllers/tacheController";

import { getEmployee, addNewEmployee } from "../controllers/employeeController";
import { getTicket, addNewTicket } from "../controllers/ticketController";
import { getTask, addNewTask } from "../controllers/taskController";
import { getClient, addNewClient } from "../controllers/clientController";
import{getLogin, addNewLogin, deleteLogin, connectUser} from "../controllers/login.js";

const routes = (app) => {
  app
    .route("/tache")
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getTaches)

    // POST endpoint
    .post(addNewTache);

  app
    .route("/tache/:tacheId")
    // get specific contact
    .get(getTacheWithID)

    // put request
    .put(updateTache)

    // delete request
    .delete(deleteTache);

      app.route("/login")
      /*  .get((req, res, next) => {
          // middleware
          console.log(`Request from: ${req.originalUrl}`);
          console.log(`Request type: ${req.method}`);
          next();
        }, getLogin)
*/
        .post(connectUser);
        
        
    // delete request
  
  app
    .route("/employee")
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getEmployee)

    .post(addNewEmployee);

  app
    .route("/client")
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getClient)

    .post(addNewClient);

  app
    .route("/ticket")
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getTicket)

    // POST endpoint
    .post(addNewTicket);

  app
    .route("/task")
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getTask)

    .post(addNewTask);
};

export default routes;
