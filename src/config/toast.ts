import { toast } from 'react-toastify';

export const ErrorToast = ({ message }: { message: string }) => {
  toast.error(message, {
    className: 'container bg-danger',
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const SuccessToast = ({ message }: { message: string }) => {
  toast.success(message, {
    className: 'container bg-primary',
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const WarningToast = ({ message }: { message: string }) => {
  toast.success(message, {
    className: 'container bg-warning ',
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const MinimalToast = ({ message }: { message: string }) => {
  toast.success(message, {
    className: 'container bg-dark ',
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
