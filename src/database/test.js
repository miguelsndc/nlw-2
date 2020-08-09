const db = require('./db')
const createProffy = require('./createProffy')
db.then( async (db) => {
  proffyValue = {
    name: "Diego Fernandes", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4", 
    whatsapp: "4983298432",
    bio: `Entusiasta das melhores tecnologias de química avançada
    Apaixonado por explodir coisas em laboratório e por mudar vidas de pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.`,
    
  }

  classValue = {
    subject: "Química", 
    cost: "20",
    //proffy id vira pelo bd
  }

  classScheduleValues = [
    // class_id vira pelo bd apos cadastro da class 
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
    weekday:0,
    time_from: 520,
    time_to: 1220
    }
  ]

  const selectedProffys = await db.all("SELECT * FROM proffys")
  console.log(selectedProffys)
});