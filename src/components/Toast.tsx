/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  JSXElementConstructor,
  Key,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  ReactPortal,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

const useTimeout = (
  callback: any,
  delay: number | null | undefined
) => {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.=
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the timeout
  useEffect(() => {
    // Don't schedule if no delay is specified
    if (delay === null) return;

    const id = setTimeout(() => savedCallback.current(), delay);

    return () => clearTimeout(id);
  }, [delay]);
};

export const Toast = (props: {
  close: MouseEventHandler<HTMLButtonElement> | undefined;
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) => {
  useTimeout(props.close, 1500);

  return (
    <div className="toast">
      <div className="toast__text">{props.children}</div>
      <div></div>
    </div>
  );
};

export const ToastContext = createContext<{
  open: (content: string) => void;
}>({ open });

export const useToast = () => useContext(ToastContext);

function generateUEID() {
  const first = (Math.random() * 46656) | 0;
  const second = (Math.random() * 46656) | 0;
  const one = ('000' + first.toString(36)).slice(-3);
  const two = ('000' + second.toString(36)).slice(-3);

  return one + two;
}

export const ToastProvider = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) => {
  const [toasts, setToasts] = useState<any>([]);
  const open = (content: any) =>
    setToasts((currentToasts: any) => [
      ...currentToasts,
      { id: generateUEID(), content },
    ]);
  const close = (id: any) =>
    setToasts((currentToasts: any[]) =>
      currentToasts.filter((toast: { id: any }) => toast.id !== id)
    );
  const contextValue = useMemo(() => ({ open }), []);

  return (
    <ToastContext.Provider value={contextValue}>
      {props.children}

      {createPortal(
        <div className="toasts-wrapper">
          {toasts.map(
            (toast: {
              id: Key | null | undefined;
              content:
                | string
                | number
                | boolean
                | ReactElement<
                    any,
                    string | JSXElementConstructor<any>
                  >
                | ReactPortal
                | Iterable<ReactNode>
                | null
                | undefined;
            }) => (
              <Toast key={toast.id} close={() => close(toast.id)}>
                {toast.content}
              </Toast>
            )
          )}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};
