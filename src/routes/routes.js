import Home from '../modules/Home/routes';
import Register from '../modules/Register/routes';
import ThankYou from '../modules/ThankYou/routes';
import Landing from '../modules/Landing/routes';

// eslint-disable-next-line import/no-anonymous-default-export
export default [...Home, ...Register, ...ThankYou, ...Landing];
