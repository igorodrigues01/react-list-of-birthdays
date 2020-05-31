const App = (props) => {
  /**************************************
   * Dados de usuários 
   ***************************************/
  const users = [
    {
      name: 'Alan',
      lastName: 'Rodrigues',
      office: 'Encarregado',
      dateBirthday: {
        day: 30,
        month: 5,
      }
    },
    {
      name: 'Marcio',
      lastName: 'Santoro',
      office: 'Servente',
      dateBirthday: {
        day: 30,
        month: 5,
      }
    },
    {
      name: 'Rodrigo',
      lastName: 'Fernandes',
      office: 'chefe',
      dateBirthday: {
        day: 31,
        month: 5,
      }
    },
    {
      name: 'Rodrigo',
      lastName: 'Fernandes',
      office: 'chefe',
      dateBirthday: {
        day: 31,
        month: 4,
      }
    },
    {
      name: 'Rodrigo',
      lastName: 'Fernandes',
      office: 'chefe',
      dateBirthday: {
        day: 2,
        month: 6
      }
    }
  ];
  // Instaciando Objeto Date
  const data = new Date();
  const getDayNow = data.getDate();
  const getMonthNow = data.getMonth() + 1;

  /**************************************
   * Métodos 
   ***************************************/
  // Mostando Nome compreto
  function getFullName(name, lastName) {
    return name + ' ' + lastName;
  }
  // Mostrando somente os usúario do mês atual
  function filterMonthCurrent(day, month) {
    if (month === getMonthNow && day >= getDayNow) {
      return 'birthday_item';
    }
    return 'birthday_item no-display'
  }
  // Verifica se é aninversáio do usuário e add "HOJE"
  function birthdayToDay(day, month) {
    if (month === getMonthNow && day === getDayNow) {
      return 'hoje';
    }
    return day + '/' + month;
  }
  /**************************************
   * Component 
   ***************************************/
  return (
    <React.Fragment>
      <h3>Aniversariantes</h3>
      <div className="birthday">
        <ul className="birthday_list">
          {users.map(({ name, lastName, office, dateBirthday }, index) => (
            <li className={filterMonthCurrent(dateBirthday.day, dateBirthday.month)} key={index}>
              <img className="birthday_image" src="https://cdn1.iconfinder.com/data/icons/random-crafticons/48/misc-_user-512.png" alt="icon user" />
              <span className="birthday_personal">
                <h3>{getFullName(name, lastName)}</h3>
                <small>{office}</small>
              </span>
              <span className={
                getDayNow === dateBirthday.day && getMonthNow === dateBirthday.month ?
                  'birthday_date active' :
                  'birthday_date'}
              >
                <p>{birthdayToDay(dateBirthday.day, dateBirthday.month)}</p>
              </span>
              <a href="#">
                <img className="birthday_image image-send" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/send-128.png" alt="icon send" title="Envie uma mensagem" />
              </a>
            </li>
          ))}

        </ul>
      </div>
    </React.Fragment>
  )
}