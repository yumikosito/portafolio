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
const [ esp, setEsp] = useState(true)

console.log(esp);
console.log(certs);


  const getExp = async () =>{
    if(esp){
      const res= await ExperienceJs();
      setExps(res.esp)

    } else {
      const res= await ExperienceJs();
      setExps(res.eng)
    }
  }

  const getPort = async () =>{
    if(esp){
        const res= await ProjectsJs();
        setPorts(res.esp)


    }
    else {
        const res= await ProjectsJs();
        setPorts(res.eng)
    }
  }

  const getEdu = async () =>{
    if(esp){
        const res= await EducationJs();
        setEdus(res.esp)

    }
    else {
        const res= await EducationJs();
        setEdus(res.eng)
    }
  }

   const getCert = async () =>{
       if(esp){
        const res= await CertificationsJs();
        setCerts(res.esp)
        
    }
    else {
        const res= await CertificationsJs();
        setCerts(res.eng)
    }
  }

  useEffect(() => {
    getExp();
    getPort();
    getEdu();
    getCert()
  }, [esp]);


  return <GetContext.Provider value = {{exps,ports,edus,certs, esp, setEsp}}>
    {children}
    </GetContext.Provider>
}

export {GetContext,GetProvider}