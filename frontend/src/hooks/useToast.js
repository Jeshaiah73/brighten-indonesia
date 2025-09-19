import { toast } from 'react-toastify';

export const useToast = () => {
  const success = (message) => toast.success(message);
  const error = (message) => toast.error(message);
  const info = (message) => toast.info(message);
  const warning = (message) => toast.warning(message);
  const custom = (options) => toast(options);

  return { success, error, info, warning, custom };
};