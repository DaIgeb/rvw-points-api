import { Router } from 'express';

import { login } from './auth';
import { products } from './products';
import { users } from './users';

export const router = Router();

/*
 * Routes that can be accessed by any one
 */
router.post('/login', login);

/*
 * Routes that can be accessed only by autheticated users
 */
router.get('/api/v1/products', products.getAll);
router.get('/api/v1/product/:id', products.getOne);
router.post('/api/v1/product/', products.create);
router.put('/api/v1/product/:id', products.update);
router.delete('/api/v1/product/:id', products.delete);

/*
 * Routes that can be accessed only by authenticated & authorized users
 */
router.get('/api/v1/admin/users', users.getAll);
router.get('/api/v1/admin/user/:id', users.getOne);
router.post('/api/v1/admin/user/', users.create);
router.put('/api/v1/admin/user/:id', users.update);
router.delete('/api/v1/admin/user/:id', users.delete);
