import { Router } from 'express';
import ProductsController from '../controllers/products.contoller';

const router = Router();

const productsController = new ProductsController();

router.get('/', productsController.findAll.bind(productsController));
router.post('/', productsController.insert.bind(productsController));

export default router;