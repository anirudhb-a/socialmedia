import driverRouter from './driver-route.js';
import riderRouter from './rider-route.js';
import riderOrderRouter from './riderOrder-route.js';
import userAuthRouter from './userAuth-route.js';
 
const route = (app) => {
    app.use('/drivers',driverRouter);
    app.use('/riders',riderRouter);
    app.use('/riderOrders',riderOrderRouter);
    app.use('/userAuths',userAuthRouter);

}

export default route;