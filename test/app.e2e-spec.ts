import * as request from 'supertest';
import { JEST_CONFIG } from './jest-config';

describe('AppController', () => {

  it('/ (GET)', () => {
    return request(JEST_CONFIG.PROD_SERVER)
      .get('/')
      .expect(200)
      .expect('Le back fonctionne, tudo bem.');
  });
});
