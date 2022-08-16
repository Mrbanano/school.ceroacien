import { initAuth0 } from '@auth0/nextjs-auth0';
import { BASE_URL } from './constants';

// Workaround for dynamic AUTH0_BASE_URL env variable
export default initAuth0({
  baseURL: BASE_URL
});
