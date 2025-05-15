const projects = [{
  imgMb:'/FFmarket-mb.png',
  imgLg:'/FFmarket-lg.png',
  title:'Proyecto certificación Desarrolladora FullStack',
  date:'2025',
  author: 'Independiente',
  category: {
    resume: 'Planificación y elaboración en un equipo de 2 personas de un sitio tipo marketplace.',
    details: [{ name:'Funciones', items: ['Autentificacion de usuario','Filtrado por categoría y precio', 'Crear, modificar y eliminar productos propios', 'Carro de compras', 'Verificaciones de requisitos']},
    {name: 'Frontend', items: ['HTML', 'CSS', 'Javascript', 'React', 'React-Bootstrap', 'Axios']},
    {name: 'Backend', items: ['Node.js', 'Express.js','PostgreSQL','Jest', 'JWT', 'bcrypt']}]},
  url:'https://ff-marketplace.capybar.org/',
},{
  imgMb:'/Capybar-mb.png',
  imgLg:'/Capybar-lg.png',
  title:'Diseñadora web Wordpress',
  date:'2024',
  author: 'Independiente',
  category: {
    resume: 'Planificación y elaboración de sitio web de comunidad en linea basada en un video juego.',
    details:[{name:'Funciones', items: ['Realizar maquetas','Discutir propuestas', 'Seleccionar plantilla existente y modificar según a lo necesitado']},{name:'Frontend', items:['Wordpress']}]},
  url:'https://capybar.org/',
}
]
export const ProjectsJs = async () => {
    return projects
}