const projects = [{
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
}
]
export const ProjectsJs = async () => {
    return projects
}