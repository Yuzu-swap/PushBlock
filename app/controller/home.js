'use strict';
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx , service, config} = this;
    ctx.body = "hello world"
  }

}

module.exports = HomeController;
