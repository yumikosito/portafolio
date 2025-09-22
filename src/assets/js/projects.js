const projects = {esp: [{
  imgMb:'',
  title:'Proyecto curso Test Automation Engineer',
  date:'2025',
  author: 'Independiente',
  category: {
    resume: 'Planificación y elaboración en un equipo de 3 personas de test automatizados CRUD a UI y API.',
    details: [
      {name:'Funciones',items: ['Automatización en crear, modificar y eliminar productos', 'Automatización en crear, modificar y eliminar clientes', 'Verificación de correcto registro e inicio de sesión de usuario']},
      {name: 'Frontend', items: ['Playwright', 'Cucumber.js', 'Javascript', 'cucumber-html-reporter']},
      {name: 'Backend', items: ['Node.js','Jest', 'SuperTest', 'jest-html-reporters']}]},
  website:{status:true, url:'https://github.com/yumikosito/adl-testing'},
},{
  imgMb:'/portfolio/FFmarket-mb.png',
  title:'Proyecto certificación Desarrolladora FullStack',
  date:'2025',
  author: 'Independiente',
  category: {
    resume: 'Planificación y elaboración en un equipo de 2 personas de un sitio tipo marketplace.',
    details: [
      {name:'Funciones',items: ['Autentificacion de usuario','Filtrado por categoría y precio', 'Crear, modificar y eliminar productos propios', 'Carro de compras', 'Verificaciones de requisitos']},
      {name: 'Frontend', items: ['HTML', 'CSS', 'Javascript', 'React', 'React-Bootstrap', 'Axios']},
      {name: 'Backend', items: ['Node.js', 'Express.js','PostgreSQL','Jest', 'JWT', 'bcrypt']}]},
  website:{status:true, url:'https://ff-marketplace.capybar.org/'},
},{
  imgMb:'/portfolio/Capybar-mb.png',
  title:'Diseñadora web Wordpress',
  date:'2024',
  author: 'Independiente',
  category: {
    resume: 'Planificación y elaboración de sitio web de comunidad en linea basada en un video juego.',
    details:[
      {name:'Funciones', items: ['Realizar maquetas','Discutir propuestas', 'Seleccionar plantilla existente y modificar según a lo necesitado']},
      {name:'Frontend', items:['Wordpress']}]},
  website:{status:true, url:'https://capybar.org/'}
},{
  imgMb:'/portfolio/ciac-mb.png',
  title:'Portal de tutores CIAC',
  date:'2025',
  author: 'CIAC UTFSM',
  category: {
    resume: 'Elaboración de Frontend de portal de consultas de tutores del Centro Integrado de Aprendizaje en Ciencias Básicas (CIAC).',
    details:[
      {name:'Funciones', items: ['Autentificacion de usuario', 'Filtrado de asignaturas','Selección múltiple de temas de consulta', 'Vista de historial de consultas de tutor']},
      {name:'Frontend', items:['HTML', 'CSS', 'Javascript', 'React', 'React-Bootstrap', 'Axios']}
    ]},
  website:{status:false}
}],

eng: [{
  imgMb:'/portfolio/FFmarket-mb.png',
  title:'Project for Full Stack Developer Certification',
  date:'2025',
  author: 'Freelance',
  category: {
    resume: 'Planning and developing a marketplace-type site as a team of 2 people.',
    details: [
      {name:'Functions',items: ['User Authentication', 'Category and Price Filtering', 'Create, Modify, and Delete Own Products', 'Shopping Cart', 'Requirement Checks']},
      {name: 'Frontend', items: ['HTML', 'CSS', 'Javascript', 'React', 'React-Bootstrap', 'Axios']},
      {name: 'Backend', items: ['Node.js', 'Express.js','PostgreSQL','Jest', 'JWT', 'bcrypt']}]},
  website:{status:true, url:'https://ff-marketplace.capybar.org/'},
},{
  imgMb:'/portfolio/Capybar-mb.png',
  title:'Wordpress Website Designer',
  date:'2024',
  author: 'Freelance',
  category: {
    resume: 'Planning and developing an online community website based on a video game.',
    details:[
      {name:'Functions', items: ['Creating mockups', 'Discussing proposals', 'Selecting an existing template and modifying it as needed.']},
      {name:'Frontend', items:['Wordpress']}]},
  website:{status:true, url:'https://capybar.org/'}
},{
  imgMb:'/portfolio/ciac-mb.png',
  title:'CIAC Tutor Portal',
  date:'2025',
  author: 'CIAC UTFSM',
  category: {
    resume: 'Development of the front-end for the tutor query portal of the Integrated Center for Learning in Basic Sciences (CIAC).',
    details:[
      {name:'Functions', items: ['User Authentication', 'Subject Filtering', 'Multiple Selection of Query Topics', 'Tutor Query History View']},
      {name:'Frontend', items:['HTML', 'CSS', 'Javascript', 'React', 'React-Bootstrap', 'Axios']}
    ]},
  website:{status:false}
}]
}
export const ProjectsJs = async () => {
    return projects
}