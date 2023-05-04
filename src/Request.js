const key = import.meta.env.VITE_APP_API_KEY;
const request = {
  requestImage: `https://pixabay.com/api/?key=${key}&q=stars&image_type=photo`,
  api_key: import.meta.env.VITE_APP_API_KEY,
};
export default request;
