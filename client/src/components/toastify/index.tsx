import { Flip, toast, ToastContainer } from "react-toastify"

export const Toastify = () =>
  <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    transition={Flip}
  />
;

export const ToastEmitter = (msg: string, result: "sucess" | "error" | "warning") => {
  const toastResult = result === "error" ? toast.error : result === "warning" ? toast.warn : toast.success;

  toastResult(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Flip,
  });
};
