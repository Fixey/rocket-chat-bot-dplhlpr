/*
Функция проверки типа объекта
IN name - название объекта
*/
module.exports = (name) => {
  if (name == "") {
    throw ("Нужно ввести тип объекта!");
  }
}