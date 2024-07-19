import { atom, useAtom } from "jotai";
import { loginUser, createUser } from "@/util/actions";
import { LoginForm, SignupForm } from "@/lib/validator";
import * as z from "zod"


export interface User {
  name: string;
  username: string;
  email: string;
  password: string;
  accessToken: string
  userId: number
}

export const userAtom = atom<User | null>(null);

export const useUser = () => {
  const [user, setUser] = useAtom(userAtom);
  const logedInUser = async (credentials: {
    username: string;
    password: string;
  }) => {
    try {
      const user = await loginUser(credentials);
      console.log(user);

      setUser(user);
      localStorage.setItem('user', JSON.stringify(user))
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const getUser =  () => {
    const u =  localStorage.getItem("user");
    if (u) {
      setUser(JSON.parse(u))
    } 
    else {
      setUser(null);
    }
    return user;
  }

  const registerUser = async (credentials: 
    {name:string,username:string,email:string, password:string}
  ) => {
    try {
      const userNew = await createUser(credentials);
      console.log(userNew);
      setUser(userNew);
    } catch (e) {
      console.log("Register Failed", e);
    }
  };

  const logoutUser = () => {
    setUser(null);
  };

  return { user, logedInUser, logoutUser, registerUser, getUser };
};
