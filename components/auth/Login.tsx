"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { LoginForm } from "@/lib/validator";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import Link from "next/link";

import { redirect } from "next/navigation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { useUser } from "@/app/state/state";

const Login: React.FC = () => {
  const { user, logedInUser } = useUser();
  const router = useRouter();
  const initialValues = {
    username: "",
    password: "",
  };
  const form = useForm<z.infer<typeof LoginForm>>({
    resolver: zodResolver(LoginForm),
    defaultValues: initialValues,
    mode: "onSubmit",
  });

  const onSubmit = async (values: z.infer<typeof LoginForm>) => {
    try {
      await logedInUser(values);
      toast.success("Logged in successfully");
      form.reset();
      router.push("/");
    } catch (error) {
      console.error("Login Error: Unknown error occurred", error);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex items-center justify-center bg-[#1b586c]  p-10">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Hello!
          </h2>
          <p className="text-center text-sm text-gray-600">
            Sign in to your account
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-8 space-y-6"
            >
              {/* Username Field */}
              <FormField
                control={form.control}
                name="username"
                render={({ field, fieldState: { error } }) => (
                  <FormItem className="relative">
                    <FormLabel className="font-bold text-gray-900">
                      Username *
                    </FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Username" {...field} />
                    </FormControl>
                    {error && (
                      <FormMessage className="text-red-500">
                        {error.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field, fieldState: { error } }) => (
                  <FormItem className="relative">
                    <FormLabel className="font-bold text-gray-900">
                      Password *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    {error && (
                      <FormMessage className="text-red-500">
                        {error.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
              {/* Remember Me Checkbox */}
              {/* <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    type="checkbox"
                    {...form.register("rememberMe")}
                    className="h-4 w-4 text-[#1b586c] focus:ring-[#1b586c] border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    href="#"
                    className="font-medium text-[#2d96b9] hover:text-[#1b586c] hover:opacity-80"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div> */}

              <Button
                type="submit"
                className="w-full group relative w- flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#1b586c] hover:bg-[#1b586c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1b586c] hover:opacity-80"
              >
                {form.formState.isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </form>
          </Form>
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#2d96b9]">
              Create
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
