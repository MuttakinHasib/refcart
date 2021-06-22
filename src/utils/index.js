import toast from 'react-hot-toast';

export const handleErrorMessage = err =>
  err.response && err.response.data.message
    ? err.response.data.message
    : err.message;

export const successAlert = message => message && toast.success(message);
export const errorAlert = error => error && toast.error(error);
