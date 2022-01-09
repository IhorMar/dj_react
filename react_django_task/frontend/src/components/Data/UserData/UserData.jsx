import AddElement from "../AddElement/AddElement";

const UserData = () => {
    return (
        <div>
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Created</th>
                    <th>Group</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>wefsfsf</td>
                    <td>Creasfsfsdfted</td>
                    <td>Grsfsdfsdfoup</td>
                    <td>
                        <button><a>Edit</a></button>
                        <button><a>Delete</a></button>
                    </td>
                </tr>
            </tbody>
        </table>
        <AddElement/>
        </div>
    )
}
export default UserData;