import { useHistory } from 'react-router-dom';


const Logout = () =>{
    const { push } = useHistory();
    localStorage.removeItem('token')
    push('/login');
}

export default Logout;