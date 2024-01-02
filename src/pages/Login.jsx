// src/components/Login.js
import React from "react";
import { redirect, json } from "react-router-dom";
import { Form } from "react-router-dom";
import { saveAuthToken } from "../utils/Util";
import { useNavigation } from "react-router-dom";

const Login = () => {
  const navigation=useNavigation();
  const isSubmitting=navigation.state==='submitting';
  return (
    <div className="bg-gray-500 h-screen  flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96 text-gray-700">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Login</h2>
        <Form method="POST" action="/login">
          <div className="mb-4 ">
            <label
              htmlFor="username"
              className="block text-gray-600 text-sm font-medium"
            >
              username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            disabled={isSubmitting}
          >
          {isSubmitting?"submitting":"Login"}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Login;

export async function action({ request }) {
  console.log(request);
  const data = await request.formData();
  console.log(data);
  const authData = {
    username: data.get("username"),
    password: data.get("password"),
  };
  console.log(authData);

  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authData),
  });
  if(response.status===422 || response.status===400){
    throw newError;
  }
  if (!response.ok) {
    throw json({ message: "could not authenticate user" }, { status: 500 });
  }
  

  const resData = await response.json();
  const token = resData.token;
  console.log(token);
  saveAuthToken(token);
  return redirect('/');
}
