import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import LeadTable from "./components/LeadTable";
import AgentGrid from "./components/AgentGrid";
import LeadCreateForm from "./components/LeadCreateForm";
import {useEffect} from "react";
import { useState } from "react";
import axios, {isCancel, AxiosError} from 'axios';
import myApi from './api/myApi';




function App() {

  const [leads, setLeads] = useState([]);  
  
  useEffect(() => {
    myApi.get("/leads/")
        .then((response) => {
            
          const data = response.data;
          console.log(data);
          setLeads(data);
          
        })
        .catch(err => console.log(err));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/leads/")
  //     .then((response) => {
        
  //       const data = response.data;
  //       console.log(data);
  //       setLeads(data);
        
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  // const leadsList = leads
  // .map((lead) => (
  //   <LeadTable
  //     first_name={lead.first_name}
  //     last_name={lead.last_name}
  //     age={lead.age}
  //     agent={lead.agent}
  //     organization={lead.organization}
  //     category={lead.category}
  //     description={lead.description}
  //     date_added={lead.date_added}
  //     phone_number={lead.phone_number}
  //     email={lead.email}
  //     state={leads}
  //     // handleDelete={handleDelete}
  //     // handleEdit={handleEdit}
  //     // handleTaskCompleted={handleTaskCompleted}
  //   />
  // ));


  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 ">
      <NavBar />
     
      <LeadTable 
        state={leads}
      />
      <AgentGrid />
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action TEST TEST TEST 
      </p>
      
    </div>
  );
}
export default App;