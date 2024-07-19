"use client";
import * as z from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupForm } from "@/lib/validator";
import { Toaster, toast } from "sonner";
import { useUser } from "@/app/state/state";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Signup: React.FC = () => {
  const { user, registerUser } = useUser();
  const router = useRouter();
  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
  };
  const form = useForm<z.infer<typeof SignupForm>>({
    resolver: zodResolver(SignupForm),
    defaultValues: initialValues,
    mode: "onSubmit",
  });

  const onSubmit = async (values: z.infer<typeof SignupForm>) => {
    try {
      await registerUser(values);
      toast.success("Registered successfully");
      form.reset();
      router.push("/login");
    } catch (error) {
      console.error("Signup Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex items-center justify-center bg-[#1b586c]  p-10">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Hello, friend!
          </h2>
          <p className="text-center text-sm text-gray-600">
            Glad to see you! Create your account.
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-8 space-y-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field, fieldState: { error } }) => (
                  <FormItem className="relative">
                    <FormLabel className="font-bold text-gray-900">
                      Full Name *
                    </FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Full Name" {...field} />
                    </FormControl>
                    {error && (
                      <FormMessage className="text-red-500">
                        {error.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
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
              <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState: { error } }) => (
                  <FormItem className="relative">
                    <FormLabel className="font-bold text-gray-900">
                      Email *
                    </FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
                    </FormControl>
                    {error && (
                      <FormMessage className="text-red-500">
                        {error.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
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
              {/* <div className="flex items-center mb-4">
                <input
                  id="agree_terms"
                  type="checkbox"
                  {...form.register("termsAndConditions")}
                  className="h-4 w-4 text-[#1b586c] focus:ring-[#1b586c] border-gray-300 rounded"
                />
                <label
                  htmlFor="agree_terms"
                  className="ml-2 block text-sm text-gray-900"
                >
                  I agree to the{" "}
                  <a href="#" className="text-[#1b586c]">
                    terms and conditions
                  </a>
                </label>
                {form.formState.errors.termsAndConditions && (
                  <FormMessage className="text-red-500">
                    {form.formState.errors.termsAndConditions.message}
                  </FormMessage>
                )}
              </div> */}
              <Button
                type="submit"
                className="w-full group relative w- flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#1b586c] hover:bg-[#1b586c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1b586c] hover:opacity-80"
              >
                {form.formState.isSubmitting
                  ? "Creating account..."
                  : "Create Account"}
              </Button>
            </form>
          </Form>
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-[#1b586c]">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
