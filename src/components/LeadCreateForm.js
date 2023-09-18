// import '../App.css';
// import NavBar from "./components/NavBar";
import myApi from '../api/myApi';
import AsyncSelect from 'react-select/async';




import React, { useState } from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";

const [items, setItems] = useState([]);
const [inputValue, setValue] = useState('');
const [selectedValue, setSelectedValue] = useState(null);



export default function LeadCreate() {


    return (
        
    <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Create Lead</h1>
        <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="name">First Name</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text" id="first-name" name="first-name" placeholder="John Doe" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="name"> Last Name</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text" id="last-name" name="last-name" placeholder="John Doe" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="name"> Age</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text" id="age" name="age" placeholder="John Doe" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="name"> Description</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text" id="age" name="age" placeholder="John Doe" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="name"> Agent</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text" id="age" name="age" placeholder="John Doe" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="name"> Category</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text" id="age" name="age" placeholder="John Doe" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="name"> Phone-Number</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text" id="age" name="age" placeholder="John Doe" />
            </div>
           
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="email" id="email" name="email" placeholder="john@example.com" />
            </div>
            <button
                className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                type="submit">Confirm
            </button>
        </form>
    </div>
        
    );
}
