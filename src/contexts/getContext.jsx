import React, { createContext,useState, useEffect } from "react";
import { ExperienceJs } from "../assets/js/experience";
import { ProjectsJs } from "../assets/js/projects";
import { EducationJs } from "../assets/js/education";

const GetContext = createContext()

const GetProvider = ({children}) => {
const [ exps, setExps] = useState([])
const [ ports, setPorts] = useState([])
const [ edus, setEdus ] = useState([])


  const getExp = async () =>{
     const res = await ExperienceJs()
     setExps(res)
  }

   const getPort = async () =>{
     const res = await ProjectsJs()
     setPorts(res)
  }

  const getEdu = async () =>{
    const res = await EducationJs();
    setEdus(res)
  }

  useEffect(() => {
    getExp();
    getPort();
    getEdu();
  }, []);


  return <GetContext.Provider value = {{exps,ports,edus}}>
    {children}
    </GetContext.Provider>
}

export {GetContext,GetProvider}