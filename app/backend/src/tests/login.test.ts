import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
const { expect } = chai;
import UsersModel from '../database/models/UsersModel';
import { Model } from 'sequelize';
import LoginService from '../services/LoginService';
import { app } from '../app';

chai.use(chaiHttp);

const mock: UsersModel[] = [new UsersModel({
  email: "admin@admin.com",
  password: "secret_admin"
})];

describe('Login tests', () => {
  
  beforeEach(async () => {
    sinon
      .stub(Model, "findOne")
      .resolves(
        mock[0]
      );
  });

  afterEach(()=>{
    (UsersModel.findOne as sinon.SinonStub).restore();
  })


  it('Service Login test', async () => {
    const service = new LoginService()
    const result = await service.LoginValidation("admin@admin.com")
    expect(result).to.be.equal(mock[0])
  });

});
