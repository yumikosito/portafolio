import React, { createContext,useState, useEffect } from "react";
import { ExperienceJs } from "../assets/js/experience";
import { ProjectsJs } from "../assets/js/projects";

const GetContext = createContext()

const GetProvider = ({children}) => {
const [ exps, setExps] = useState([])
const [ ports, setPorts] = useState([])


  const getExp = async () =>{
     const res = await ExperienceJs()
     setExps(res)
  }

   const getPort = async () =>{
     const res = await ProjectsJs()
     setPorts(res)
  }

  useEffect(() => {
    getExp();
    getPort();
  }, []);


  return <GetContext.Provider value = {{exps,ports}}>
    {children}
    </GetContext.Provider>
}

export {GetContext,GetProvider}