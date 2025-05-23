const education ={esp: [{
  img:'/education/ADL.png',
  degree:'Desarrollador Full Stack JavaScript',
  place: 'Academia Desafío Latam',
  date:'2024 - 2025',
  color:'#e5f8cc',
  certs: {
    active:true,
    title:'Certificados',
    items: [
      {name:'FullStack Js', url:"/files/FullStack.pdf"}
    ]}
}, {
  img:'/education/ADL.png',
  degree:'Desarrollador Backend',
  place: 'Academia Desafío Latam',
  date:'2024-2025',
  color:'#e5f8cc',
  certs: {
    active:true,
    title: 'Certificados',
    items:[
      {name:'Backend Node y Express', url:'/files/Back-end.pdf'},
      {name:'SQL', url:'/files/SQL.pdf'}
    ]}
}, {
  img:'/education/ADL.png',
  degree:'Desarrollador Frontend',
  place: 'Academia Desafío Latam',
  date:'2024',
  color:'#e5f8cc',
  certs: {
    active:true,
    title: 'Certificados',
    items:[
      {name:'Frontend React', url:'/files/Front-end.pdf'},
      {name:'React', url:'/files/React.pdf'},
      {name:'JavaScript para la Web', url:'/files/JavaScript-Web.pdf'},
      {name:'CSS Avanzado', url:'/files/CSS.pdf'},
      {name:'Introducción al desarrollo web', url:'/files/Intro-Web.pdf'}
    ]}
}, {
  img:'/education/Utokyo.png',
  degree:'Intercambio académico',
  place: 'Universidad de Tokio',
  date:'2019 - 2020',
  color:'#f9facd',
  certs: {
    active:false
  }
}, {
  img:'/education/PUC.png',
  degree:'Nutrición y dietética',
  place: 'Pontificia Universidad Católica de Chile',
  date:'2015 - 2020',
  color:'#e0ecfd',
  certs: {
    active:false
  }
}
],

eng: [{
  img:'/education/ADL.png',
  degree:'FullStack Javascript Developer',
  place: 'Desafío Latam Academy',
  date:'2024 - 2025',
  color:'#e5f8cc',
  certs: {
    active:true,
    title:'Certificates',
    items: [
      {name:'FullStack Js', url:"/files/FullStack.pdf"}
    ]}
}, {
  img:'/education/ADL.png',
  degree:'Backend Developer',
  place: 'Desafío Latam Academy',
  date:'2024-2025',
  color:'#e5f8cc',
  certs: {
    active:true,
    title: 'Certificates',
    items:[
      {name:'Backend Node & Express', url:'/files/Back-end.pdf'},
      {name:'SQL', url:'/files/SQL.pdf'}
    ]}
}, {
  img:'/education/ADL.png',
  degree:'Frontend Developer',
  place: 'Desafío Latam Academy',
  date:'2024',
  color:'#e5f8cc',
  certs: {
    active:true,
    title: 'Certificates',
    items:[
      {name:'Frontend React', url:'/files/Front-end.pdf'},
      {name:'React', url:'/files/React.pdf'},
      {name:'JavaScript for the Web', url:'/files/JavaScript-Web.pdf'},
      {name:'Advanced CSS', url:'/files/CSS.pdf'},
      {name:'Introduction to web development', url:'/files/Intro-Web.pdf'}
    ]}
}, {
  img:'/education/Utokyo.png',
  degree:'Academic exchange',
  place: 'University of Tokyo',
  date:'2019 - 2020',
  color:'#f9facd',
  certs: {
    active:false
  }
}, {
  img:'/education/PUC.png',
  degree:'Nutrition and dietetics',
  place: 'Pontifical Catholic University of Chile',
  date:'2015 - 2020',
  color:'#e0ecfd',
  certs: {
    active:false
  }
}
]
}
export const EducationJs = async () => {
    return education
}