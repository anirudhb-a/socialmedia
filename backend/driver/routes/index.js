import driverRouter from './driver-route.js';

const route = (app) => {
    app.use('/drivers',driverRouter);

}

export default route;