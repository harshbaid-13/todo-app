"use client"
import { SessionProvider } from "next-auth/react"
import { Provider, useSelector } from 'react-redux'
import { store } from "./store"
import Loader from "@/components/Loader/Loader"

export const NextAuthProvider = ({ children }) => {
    return <SessionProvider>{children}</SessionProvider>
}

export const ReduxProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
}

export const LoaderProvider = ({ children }) => {
    const loading = useSelector((state) => state.todo.loading);
    return <div>{loading ? <Loader /> : children}</div>
}