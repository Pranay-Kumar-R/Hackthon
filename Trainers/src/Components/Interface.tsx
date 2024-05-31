export interface Course {
    name: string;
}

export interface User {
    name: string;
    mail: string;
    username: string;
    role: string;
}

export interface IAssignesCourses {
    selectedCourses: string[];
    statics:boolean
}

export interface UserDetailsDialogProps {
    onClose: () => void;
}

export interface UserDetailsDialogProp {
    user: User;
    onClose: () => void;
}

export interface State {
    selectedRole: string | null;
    selectedUser: User | null;
    isDialogOpen: boolean;
    selectedCourses: Course[];
}


export interface LoginState {
    isLoggedIn: boolean;
}
