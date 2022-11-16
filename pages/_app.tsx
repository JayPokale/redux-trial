import "../styles/globals.css";
import type { AppProps } from "next/app";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import counterSlice from "../slices/counterSlices";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
