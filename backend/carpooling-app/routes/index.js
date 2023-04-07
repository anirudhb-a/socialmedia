import driverRouter from './driver-route.js';
import riderRouter from './rider-route.js';

const route = (app) => {
    app.use('/drivers',driverRouter);
    app.use('/riders',riderRouter);

}

export default route;