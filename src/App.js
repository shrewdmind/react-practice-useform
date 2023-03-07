import { React } from 'react';
import UserForm from './UserForm/UserForm';
import UserData from './UserData/UserData';
import User from './UserData/User.js'
import { useState } from 'react';
import ErrorModal from './ErrorModal/ErrorModal';

function App() {
  const [users, setUsers] = useState(User);

  const [isError, setError] = useState({
    error: false,
    errorMessage: ''
  })

  
  const onSubmitFormHandler = (u) => {
    if (u.age < 0 || u.username === '' || u.age === '') {
      setError(() => {
        return {
          error: true,
          errorMessage: u.age < 0 ? 'Invalid age input: age cannot be less than 0' : 'Username or Age cannot be null'
        }
      })
    }
    else {
      setUsers((userData) => {
        return [u, ...userData];
      })
    }
  } 

  const setErrorState = (e) => {
    setError(e)
  }

  return (
    <div>
      <UserForm 
        onSubmitForm={onSubmitFormHandler}
      />
      <UserData 
        users={users}
      />
      {
        isError.error &&
        <ErrorModal
          error={isError}
          changeErrorState={setErrorState}
        />
      }
    </div>
  );
}

export default App;
