import express, { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';
import { authenticate } from '../../lib/security/authMiddleware'; // Assuming an authentication middleware exists
import { fetchData, updateData } from '../../lib/ai/aiWorkflow'; // Assuming these functions exist for data operations

const router = express.Router();

// Middleware for validating request data
const validateRequest = [
  check('id').isUUID().withMessage('Invalid ID format'),
  check('data').isString().withMessage('Data must be a string'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// GET endpoint to fetch data
router.get('/data/:id', authenticate, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await fetchData(id);
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// POST endpoint to update data
router.post('/data', authenticate, validateRequest, async (req: Request, res: Response) => {
  try {
    const { id, data } = req.body;
    const updatedData = await updateData(id, data);
    res.json(updatedData);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;

