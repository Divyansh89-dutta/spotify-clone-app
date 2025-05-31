import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react"
import { axiosInstance } from "@/lib/axios";
import { Loader } from "lucide-react";
import useAuthStore from "@/stores/useAuthStore";
import useChatStore from "@/stores/useChatStore";

const updateApiToken = (token: string | null) => {
    if (token) axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    else delete axiosInstance.defaults.headers.common['Authorization'];
};

const AuthProvider = ({ children } : { children: React.ReactNode }) => {
  const { getToken, userId } = useAuth();
  const [ loading, setLoading ] = useState(true);
  const { checkAdminStatus } = useAuthStore();
  const { initSocket, disconnectSocket } = useChatStore();

  useEffect(() => {
    const initializeAuth = async () => {
        try {
            const token = await getToken();
            updateApiToken(token);
            if (token) {
              await checkAdminStatus();
              // initialize socket
              if (userId) initSocket(userId);
            }
        } catch (error) {
            updateApiToken(null);
            console.log("Error in auth provider", error);
        } finally {
            setLoading(false);
        }
    }

    initializeAuth();

    // clean up
    return () => disconnectSocket();
  }, [getToken, userId, checkAdminStatus, initSocket, disconnectSocket]);

  if (loading) return (
    <div className="h-screen w-full flex justify-center items-center">
        <Loader className="size-8 text-emerald-500 animate-spin" />
    </div>
  );
  return (
    <>{children}</>
  )
}

export default AuthProvider;