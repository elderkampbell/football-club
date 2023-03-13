import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
const { expect } = chai;
import UsersModel from '../database/models/UsersModel';
import { Model } from 'sequelize';
import { Response } from 'superagent';
import LoginService from '../services/LoginService';
import { app } from '../app';

chai.use(chaiHttp);

const mock: UsersModel[] = [new UsersModel({
  email: "admin@admin.com",
  password: "secret_admin"
})];

const mockNoEmail: UsersModel[] = [new UsersModel({
  password: "secret_admin"
})];

const mockNoPassword: UsersModel[] = [new UsersModel({
  email: "admin@admin.com"
})];

const mockInvalidPassword: UsersModel[] = [new UsersModel({
  email: "admin@admin.com",
  password: "12345"
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
 
  it('Not possible to login without email', async () => {
    const response = await chai.request(app).post('/login').send(mockNoEmail);
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ "message": "All fields must be filled" });
  });

  it('Not possible to login without password', async () => {
    const response = await chai.request(app).post('/login').send(mockNoPassword);
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ "message": "All fields must be filled" });
  });

  // it('Not possible to login with invalid password', async () => {
  //   const response = await chai.request(app).post('/login').send(mockInvalidPassword);
  //   expect(response.status).to.be.equal(400);
  //   expect(response.body).to.be.deep.equal({ "message": "Invalid email or password" });
  // });

});
