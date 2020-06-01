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
        day: 1,
        month: 6
      }
    },
    {
      name: 'Maria',
      lastName: 'João',
      office: 'Gerente',
      dateBirthday: {
        day: 2,
        month: 6
      }
    },
    {
      name: 'Mario',
      lastName: 'Sergio',
      office: 'Gerente de Produto',
      dateBirthday: {
        day: 4,
        month: 6
      }
    }
  ];

//   const data = new Date();
//   const monthNow = (data.getMonth() + 1)

//   function getBirthdaysOfMonth() {
//     const toMonth = users.map(({ dateBirthday }) => {
//       return dateBirthday.month;
//     });
//     const filterMonth = toMonth.filter((month === 11) => {
//   return month;
// })
// return filterMonth
//     // console.log(toMonth)
//   }

// console.log(getBirthdaysOfMonth());

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
}
