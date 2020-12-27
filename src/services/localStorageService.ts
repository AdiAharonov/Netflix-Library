import { User } from './interfaceService';

const getUser = () => {
 const user: any = localStorage.getItem("user");
 return JSON.parse(user)
}

const setUser = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
}



export const localStorageService = {
    getUser,
    setUser
}