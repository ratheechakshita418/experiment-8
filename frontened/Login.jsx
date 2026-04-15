import { useForm } from "react-hook-form";
import axios from "axios";
import { TextField, Button, CircularProgress } from "@mui/material";
import { useState } from "react";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/login", data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      alert("Login Successful");
      window.location.href = "/dashboard";
    } catch {
      alert("Invalid Credentials");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField label="Email" {...register("email")} fullWidth />
      <TextField label="Password" type="password" {...register("password")} fullWidth />
      <Button type="submit">
        {loading ? <CircularProgress size={20} /> : "Login"}
      </Button>
    </form>
  );
}
