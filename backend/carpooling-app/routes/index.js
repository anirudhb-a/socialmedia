import driverRouter from './driver-route.js';
import riderRouter from './rider-route.js';
import riderOrderRouter from './riderOrder-route.js';

const route = (app) => {
    app.use('/drivers',driverRouter);
    app.use('/riders',riderRouter);
    app.use('/riderOrders',riderOrderRouter);

}

export default route;