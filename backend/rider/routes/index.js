import riderRouter from './rider-route.js';

const route = (app) => {
    app.use('/riders',riderRouter);

}

export default route;