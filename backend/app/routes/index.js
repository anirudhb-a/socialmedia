import carpoolingRouter from './carpooling-route.js';

//creating the URL for the route 
const route = (app) => {
    app.use('/commuters', carpoolingRouter);
}

export default route;