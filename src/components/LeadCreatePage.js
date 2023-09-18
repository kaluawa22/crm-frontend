// import '../App.css';
import NavBar from "./NavBar";
import LeadCreateForm from "./LeadCreateForm";

import React from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";


export default function LeadCreatePage() {
    return (
        
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <NavBar />
      <LeadCreateForm />
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
    </div>
    );
}
