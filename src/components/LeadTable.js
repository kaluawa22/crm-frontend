
import React from 'react'
import { useState } from "react";

const LeadTable = ({state}) => {

//   const data = [
//     {
//       name: "Peter Hernandez",
//       job: "Training manager",
//       email: "peterkhernandez@rhyta.com",
//       created: "30/10/2021",
//       category:"placeholder"
//     },
//   ]



  
    return (
    <div className="mx-auto pb-8 w-full max-w-7xl overflow-x-auto">
      <table className="px-4 min-w-full rounded-md border border-gray-200 overflow-hidden">

        {/* :TABLE HEAD */}
        
        <thead className="min-w-full bg-gray-100 text-left text-gray-700">
          <tr>
            {/* ::Name */}
            <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">First Name</th>
            {/* ::Job Title */}
            <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Last Name</th>
            {/* ::Email */}
            <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Age</th>
            <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Category</th>
            <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Agent</th>
            {/* ::Created Date */}
            {/* ::Email */}
            <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Description</th>
            {/* ::Created Date */}
            <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Created</th>
            <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Phone Number</th>
            <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Email</th>
            {/* ::Actions */}
            <th className="py-3 px-4 text-center text-sm font-medium uppercase tracking-wide" scope="col">Actions</th>
          </tr>
        </thead>

{/* DONT FORGET TO FIX BUG FOR IF THERE IS NO AGENT ASSIGNED */}
        {/* :TABLE BODY */}
        <tbody className="">
          {state.map((lead, index) => (
            <tr key={lead.first_name} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"} whitespace-nowrap`}>
              {/* ::User Name */}
              <td className="py-3 px-4 text-base text-gray-700 font-semibold">{lead.first_name}</td>
              {/* ::User Job Title */}
              <td className="py-3 px-4 text-base text-gray-500 font-medium">{lead.last_name}</td>
              {/* ::User Email */}
              <td className="py-3 px-4 text-base text-gray-500 font-medium">{lead.age}</td>
              {/* ::User Created Date */}
              {/* ::Action Buttons */}
              {/* ::User Job Title */}
              <td className="py-3 px-4 text-base text-gray-500 font-medium">{lead.category}</td>
              <td className="py-3 px-4 text-base text-gray-500 font-medium">{lead.agent.user.email}</td>
              <td className="py-3 px-4 text-base text-gray-500 font-medium">{lead.description}</td>
              {/* ::User Email */}
              <td className="py-3 px-4 text-base text-gray-500 font-medium">{lead.date_added}</td>
              {/* ::User Created Date */}
              <td className="py-3 px-4 text-base text-gray-500 font-medium">{lead.phone_number}</td>
              <td className="py-3 px-4 text-base text-gray-500 font-medium">{lead.email}</td>
              {/* ::Action Buttons */}
              <td className="py-3 px-4 flex justify-around items-center space-x-6 text-base text-gray-700 font-medium">
                {/* :::edit button */}
                <button type="button" className="text-sm text-gray-700 font-semibold hover:underline hover:text-black">Edit</button>
                {/* :::delete button */}
                <button type="button" className="text-sm text-red-500 font-semibold hover:text-red-600">Delete</button>
              </td>
            </tr>
          ))
          }
        </tbody>

      </table>
    </div>
  )
}

export default LeadTable
