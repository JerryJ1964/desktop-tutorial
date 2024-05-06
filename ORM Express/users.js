import { Router } from 'express'
import notFoundErrorHandler from '../middleware/notFoundErrorHandler.js';
//1----
import getUserOrders from '../services/users/getUserOrders.js';
//2----
//import userRouter from '../routes/users.js';
//3----

//var router = express.Router();

//app.use('/users', router);
//app.use('./users', userRouter)

const router = Router()

router.get(
  '/:id/orders',
  async (req, res, next) => {
      try {
        const {
          id
        } = req.params
        const userOrders = await getUserOrders(id)


        res.status(200).json(userOrders)
      } catch (error) {
        next(error)
      }
    },
    notFoundErrorHandler
)

export default router