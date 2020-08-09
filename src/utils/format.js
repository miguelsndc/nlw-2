const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação", 
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química", 
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

function hoursToMinutes(time){
  const [hour, minutes] = time.split(":")
  return Number((hours * 60) + minutes)
} 

function getSubject(subject){
  const arrayPosition = +subject - 1
  return subject[arrayPosition]
}

module.exports - {
  subjects,
  weekdays,
  getSubject,
  hoursToMinutes
}