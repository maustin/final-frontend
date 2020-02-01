// TODO: this needs to be part of build process to point to local/dev or production
export const API_URL = process.env.NODE_ENV == 'production' ? 'https://gars-api.maustin.io/v1' : 'http://localhost:11011/v1';
