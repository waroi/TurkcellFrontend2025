import { firebaseApi } from './firebase';

// Create an abstraction that can be swapped with other implementations
export const api = firebaseApi;
