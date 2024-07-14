import { get, post } from './HttpProvider';
import featureConstants from './features-constants';

const SERVICE_URLS = {
  // claimsList: 'claim/getclaimlistcompactudt',
  userlist: '/jobs',
  username:"users/",
  user:"/users/login",
};
const userLogin = (data) =>
  post(
    SERVICE_URLS.user ,data
    ,
    { feature: featureConstants.static },
  );
// const getClaimsList = (data) =>
//   post(SERVICE_URLS.claimsList, data, { feature: featureConstants.static });
const userlist = () =>
  get(
    SERVICE_URLS.userlist ,
    {},
    { feature: featureConstants.static },
  );
const apiServices = {
  // getClaimsList,
  userLogin,
  userlist,
};
export default apiServices;
