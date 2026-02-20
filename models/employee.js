'use strict';

import JsonStore from './json-store.js';

const employee_info = {

  store: new JsonStore('./models/employee.json', {
    employee: {}
  }),

  collection: 'employee',

 getEmployee() {
  return this.store.findAll(this.collection);
}

};

export default employee_info;