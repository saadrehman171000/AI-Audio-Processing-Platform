import * as z from "zod";
import axios, { AxiosRequestConfig } from "axios";
import { SignupForm } from "@/lib/validator";
import { LoginForm } from "@/lib/validator";

const baseUrl = `http://localhost:3000`;

type LoginRequest = z.infer<typeof LoginForm>
type RegisterReq = z.infer<typeof SignupForm>

export async function loginUser(credentials: {username: string, password: string}) {
  try {
    // const validation = LoginForm.safeParse(input);

    // if (!validation.success) {
    //   return { success: false, error: validation.error.format() };
    // }

    // let options: AxiosRequestConfig = {
    //   method: "POST",
    //   url: `${baseUrl}/auth/local/login`,
    //   data: validation.data,
    // };

    // const response = await axios.request(options);
    // console.log(response);
    const response = await axios.post(`${baseUrl}/auth/local/login`, credentials);
    return response.data; // Return the response data
    // return { success: true, error: false, data: response.data };
  } catch (error) {
    console.error('Error creating user:', error);
    throw error; //
  }
}

export async function createUser(input: RegisterReq) {
  try {
    const validation = SignupForm.safeParse(input);
    if (!validation.success) {
      return { success: false, error: validation.error.format() };
    }
    // let options: AxiosRequestConfig = {
    //   method: "POST",
    //   url: `${baseUrl}/auth/local/signup`,
    //   data: validation.data,
    // };

    // const response = await axios.request(options);
    // return { success: true, error: false, data: response };
    const response = await axios.post(`${baseUrl}/auth/local/signup`, validation);
    return response.data; 
  } catch (error) {
     console.error('Error creating user:', error);
    throw error;
  }
}
