import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import "../styles/App.css";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      cpf: "",
      senha_user: "",
      confirmarSenha: "",
    }
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold">Faça seu cadastro</h2>
        </div>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            {...formik.getFieldProps("nome")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            {...formik.getFieldProps("email")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="cpf"
            placeholder="Seu CPF"
            {...formik.getFieldProps("cpf")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="senha_user"
            placeholder="Sua senha"
            {...formik.getFieldProps("senha_user")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirme sua senha"
            {...formik.getFieldProps("confirmarSenha")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Registrar
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
