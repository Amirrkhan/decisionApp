const arrayOfNames = [
    {
        firstName: 'Amirkhan',
        lastName: 'Bayanov'
    },
    {
        firstName: 'Kanat',
        lastName: 'Konyrbayev'
    },
    {
        firstName: 'Aituar',
        lastName: 'Abdilyly'
    },    
    {
        firstName: 'Bakytzhan',
        lastName: 'Sultanov'
    },
  
]

const getFirstName = (arrayOfNames) => {
    return arrayOfNames.map(element => {
        return element.firstName
    });
}

const fullName = 'Amirkhan Bayanov'

const getFirstNameFull = (fullname) => fullname.split(' ')[0];

console.log(getFirstNameFull(fullName))

console.log(getFirstName(arrayOfNames))