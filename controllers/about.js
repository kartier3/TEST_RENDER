'use strict';

import logger from "../utils/logger.js";
import employee_info from "../models/employee.js";

const employee_st = {

  createView(request, response) {
    logger.info("About page loading!");

    const employee = employee_info.getEmployee();

    response.render("about", {
      title: "About",
      employee: employee
    });
  },

};

export default employee_st;