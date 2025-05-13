const projects = [{
  imgMb:'/FFmarket-mb.png',
  imgLg:'/FFmarket-lg.png',
  title:'Proyecto certificación Desarrolladora FullStack',
  date:'2025',
  author: 'Independiente',
  details: {
    Detalles: 'Planificación y elaboración en un equipo de 2 personas de un sitio tipo marketplace.',
    Funciones: ['Autentificacion de usuario','Filtrado por categoría y precio', 'Crear, modificar y eliminar productos propios', 'Carro de compras', 'Verificaciones de requisitos'],
    Tech:{
      Frontend:['HTML', 'CSS', 'Javascript', 'React', 'React-Bootstrap', 'Axios'],
      Backend: ['Node.js', 'Express.js','PostgreSQL','Jest', 'JWT', 'bcrypt']},
    },
  url:'https://ff-marketplace.capybar.org/'
},{
  imgMb:'/Capybar-mb.png',
  imgLg:'/Capybar-lg.png',
  title:'Diseñadora web Wordpress',
  date:'2024',
  author: 'Independiente',
  details: {
    Detalle: 'Planificación y elaboración de sitio web de comunidad en linea basada en un video juego.',
    Funciones: ['Realizar maquetas','Discutir propuestas', 'Seleccionar plantilla existente y modificar según a lo necesitado'],
    Tech:{
      Frontend:['Wordpress']}},
  url:'https://capybar.org/'
}
]
export const ProjectsJs = async () => {
    return projects
}