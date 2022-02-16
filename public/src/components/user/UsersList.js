import './UsersList.css';
import Card from '../ui/Card';

const UsersList = (props) =>{
    return(
        <Card className='users'>
            <ul>
                {props.users.map((user) => (
                    <li key='u1'>
                        {user.name} (Age: {user.age})
                    </li>
                ))}
            </ul>
        </Card>
    )
};
export default UsersList;