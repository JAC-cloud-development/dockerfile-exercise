import { Router } from 'express';

const router = new Router();

router.use('/hello-world', (req, res, next) => {
    res.json({ test: "test", timestamp: new Date() })
});

export default router;
