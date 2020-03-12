import * as request from 'supertest';
import { JEST_CONFIG } from './jest-config';

describe('UserController', () => {

    it('/test (GET)', () => {
        return request(JEST_CONFIG.PROD_SERVER)
            .get('/test')
            .expect(404)
    });
});
