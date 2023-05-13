import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { DetailPage } from "./pages/DetailPage";
import { CreatePage } from "./pages/CreatePage";
import { LinksPage } from "./pages/LinksPage";

export const useRoutes = isAuthenticated => {

  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/links" element={
            <LinksPage />
          }
        />
        <Route path="/create" element={
            <CreatePage />
          }
        />
        <Route path="/detail/:id" element={
            <DetailPage />
          }
        />
        <Route path="*" element={
            <Navigate to="/create" />
          }
        />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/" element={
        <AuthPage />
      }
      />
      <Route path="*" element={
          <Navigate to="/" />
        }
      />
    </Routes>
  )
}