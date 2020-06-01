const BirthdayItem = (props) => {
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
  return (
    <React.Fragment>
      <li className={filterMonthCurrent(props.date.day, props.date.month)}>
        <img className="birthday_image" src="https://cdn1.iconfinder.com/data/icons/random-crafticons/48/misc-_user-512.png" alt="icon user" />
        <span className="birthday_personal">
          <h3>{getFullName(props.name, props.lastName)}</h3>
          <small>{props.office}</small>
        </span>
        <span className={
          getDayNow === props.date.day && getMonthNow === props.date.month ?
            'birthday_date active' :
            'birthday_date'}
        >
          <p>{birthdayToDay(props.date.day, props.date.month)}</p>
        </span>
        <a href="#">
          <img className="birthday_image image-send" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/send-128.png" alt="icon send" title="Envie uma mensagem" />
        </a>
      </li>
    </React.Fragment>
  )
}