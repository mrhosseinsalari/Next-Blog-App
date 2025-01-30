"use client";

import { getUserApi, signinApi, signupApi } from "@/services/authService";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case "signin":
    case "signup":
    case "user/loaded":
      return {
        ...state,
        isLoading: false,
        user: payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default function AuthProvider({ children }) {
  const router = useRouter();

  const [{ user, isAuthenticated, isLoading }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  async function authorizeUser({ authFn, actionType, values }) {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await authFn(values);
      dispatch({ type: actionType, payload: user });
      toast.success(message);
      router.push("/profile");
      router.refresh();
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    }
  }

  async function signup(values) {
    await authorizeUser({
      authFn: signupApi,
      actionType: "signup",
      values,
    });
  }

  async function signin(values) {
    await authorizeUser({
      authFn: signinApi,
      actionType: "signin",
      values,
    });
  }

  async function getUser() {
    dispatch({ type: "loading" });
    // await new Promise((res) => setTimeout(() => res(), 2000));

    try {
      const { user } = await getUserApi();
      dispatch({ type: "user/loaded", payload: user });
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errorMsg });
      // toast.error(errorMsg);
    }
  }

  useEffect(() => {
    async function fetchData() {
      await getUser();
    }
    fetchData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, signup, signin }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("not found Auth Context");
  return context;
}
