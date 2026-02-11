const users = [
  { id: 1, name: "Anna", age: 22, city: "Moscow", isActive: true },
  { id: 2, name: "Oleg", age: 17, city: "Kazan", isActive: false },
  { id: 3, name: "Ivan", age: 30, city: "Moscow", isActive: true },
  { id: 4, name: "Maria", age: 25, city: "Sochi", isActive: false }
];
// Задание 1. Фильтрация пользователей
function getActiveUsers(usersArray) {
  return usersArray.filter(user => user.isActive);
}
// Задание 2. Получение имён пользователей (стрелочная функция)
const getUserNames = (usersArray) => {
  return usersArray.map(user => user.name);
};
// Задание 3. Поиск пользователя
function findUserById(usersArray, id) {
  const foundUser = usersArray.find(user => user.id === id);
  return foundUser !== undefined ? foundUser : null;
}
// Задание 4. Подсчёт статистики
function getUsersStatistics(usersArray) {
  const active = usersArray.filter(user => user.isActive).length;
  return {
    total: usersArray.length,
    active: active,
    inactive: usersArray.length - active
  };
}
// Задание 5. Средний возраст
function getAverageAge(usersArray) {
  if (usersArray.length === 0) return 0;
  const sumAge = usersArray.reduce((sum, user) => sum + user.age, 0);
  return sumAge / usersArray.length;
}
// Задание 6. Группировка пользователей по городам
function groupUsersByCity(usersArray) {
  return usersArray.reduce((acc, user) => {
    if (!acc[user.city]) {
      acc[user.city] = [];
    }
    acc[user.city].push(user);
    return acc;
  }, {});
}
console.log('Активные пользователи:', getActiveUsers(users));
console.log('Имена пользователей:', getUserNames(users));
console.log('Поиск пользователя с id=3:', findUserById(users, 3));
console.log('Поиск несуществующего пользователя:', findUserById(users, 99));
console.log('Статистика:', getUsersStatistics(users));
console.log('Средний возраст:', getAverageAge(users));
console.log('Группировка по городам:', groupUsersByCity(users));