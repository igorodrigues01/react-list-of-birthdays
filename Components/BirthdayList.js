const BirthdayList = (props) => {
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

  const data = new Date();
  const monthNow = (data.getMonth() + 1)

  function getBirthdaysOfMonth() {
    const toMonth = users.map(({ dateBirthday }) => {
      return dateBirthday.month;
    });
    const filterMonth = toMonth.filter((month === 11) => {
  return month;
})
return filterMonth
    // console.log(toMonth)
  }

console.log(getBirthdaysOfMonth());

const isShow = true;
if (isShow) {
  return (
    <React.Fragment>
      <ul className="birthday-list">
        {users.map(({ name, lastName, office, dateBirthday }, index) => (
          <BirthdayItem
            name={name}
            lastName={lastName}
            office={office}
            date={dateBirthday}
            key={index}
          />
        ))}
      </ul>
    </React.Fragment>
  )
} else {
  return (
    <div>
      <p>Não há mais aniversariantes neste mês.</p>
    </div>
  )
}
}