import { createContext,useState, useEffect } from "react";
import { ExperienceJs } from "../assets/js/experience";
import { ProjectsJs } from "../assets/js/projects";
import { EducationJs } from "../assets/js/education";
import { CertificationsJs } from "../assets/js/certifications";

const GetContext = createContext()

const GetProvider = ({children}) => {
const [ exps, setExps] = useState([])
const [ ports, setPorts] = useState([])
const [ edus, setEdus ] = useState([])
const [ certs, setCerts ] = useState([])


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

   const getCert = async () =>{
    const res = await CertificationsJs();
    setCerts(res)
  }

  useEffect(() => {
    getExp();
    getPort();
    getEdu();
    getCert()
  }, []);


  return <GetContext.Provider value = {{exps,ports,edus,certs}}>
    {children}
    </GetContext.Provider>
}

export {GetContext,GetProvider}