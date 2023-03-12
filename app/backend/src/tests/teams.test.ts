import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
const { expect } = chai;
import TeamsModel from '../database/models/TeamsModel';
import { Model } from 'sequelize';
import TeamsService from '../services/TeamsService';
import { app } from '../app';

chai.use(chaiHttp);

const mock: TeamsModel[] = [new TeamsModel({
  id: 1,
  teamName: 'Vasco da Gama'
})];


describe('FindAll Teams tests', () => {
  
  beforeEach(async () => {
    sinon
      .stub(Model, "findAll")
      .resolves(
        mock
      );
  });

  afterEach(()=>{
    (TeamsModel.findAll as sinon.SinonStub).restore();
  })


  it('findAll Teams test', async () => {
    const chaiHttpResponse = await chai
       .request(app)
        .get('/teams')
        expect(chaiHttpResponse.status).to.be.equal(200)
        expect(chaiHttpResponse.body[0]).to.include({
          id: 1,
          teamName: 'Vasco da Gama'
        })
  });


  it('findById Teams test', async () => {
    const chaiHttpResponse = await chai
       .request(app)
        .get('/teams/1')
        expect(chaiHttpResponse.status).to.be.equal(200)
        expect(chaiHttpResponse.body[0]).to.include({
          id: 1,
          teamName: 'Vasco da Gama'
        })
  });
});
