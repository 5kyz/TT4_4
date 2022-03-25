import express from 'express';

import { updateBalance } from '../controllers/balance.js';

router.patch('/balance', updateBalance);               // update balance (deposit mooney into customer account)


export default router;