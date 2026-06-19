import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useFollowUserMutation } from "../services/Users.Service";
import { ToastEmitter } from "../components/toastify";

export const useFollow = () => {
  const [followUser, { isLoading: followLoading }] = useFollowUserMutation();

  const fuctionFollow = async (id: number) => {
    try {
      await followUser(id).unwrap();
    } catch (error) {
      ResponseError(error, "Desculpe! Ocorreu algum erro.");
    }
  };

  return { followLoading, fuctionFollow }
};

export const genereteUsername = (name: string) => {
  const nameUser = name.toLowerCase().split(" ");
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  const username = `@${nameUser[0]}${nameUser[1]}${randomNumber}`;
  return username;
};

export const ResponseError = (error: unknown, message: string) => {
  // Verificação segura de tipo para o RTK Query
  const fetchError = error as FetchBaseQueryError;
  const errorData = fetchError.data as { detail?: string; } | undefined;
  console.error("Erro completo:", fetchError);

  const errorMessage = errorData?.detail || message;
  ToastEmitter(errorMessage, 'error');
};
