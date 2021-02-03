import { useHistory } from 'react-router-dom';


const Logout = () =>{
    const { push } = useHistory();
    localStorage.removeItem('token')
    push('/');
}

export default Logout;