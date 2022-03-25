import express from 'express';

import { createAccount, loginAccount } from '../controllers/auth.js';

const router = express.Router();

router.post('/create_account/', createAccount);
router.post('/login/', loginAccount);

export default router;