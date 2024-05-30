import React from 'react';

interface User {
    username: string;
    name: string;
    mail: string;
    role: string;
}

interface RenderUsersByRoleProps {
    role: string;
    staticUsers: User[];
    handleUserClick: (user: User) => void;
    handlePlusIconClick: (role: string) => void;
}

class RenderUsersByRole extends React.Component<RenderUsersByRoleProps> {
    render() {
        const { role, staticUsers, handleUserClick, handlePlusIconClick } = this.props;

        const users = staticUsers.filter(user => user.role === role);

        return (
            <div className="users-list">
                {users.map(user => (
                    <div key={user.username} className="d-flex border user justify-content-between px-2" onClick={() => handleUserClick(user)}>
                        <div className="my-1 p-1">
                            <div>Name: {user.name}</div>
                            <div>Username: {user.username}</div>
                            <div>Email: {user.mail}</div>
                        </div>
                        <div className="add-Task d-flex">
                            <i onClick={() => handlePlusIconClick(role)} className="fa-solid fa-plus plus-icon pt-3 pe-2"></i>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default RenderUsersByRole;
