import axios from 'axios';

export const register = (newUser) => {
    return axios
      .post('http://localhost:8080/auth/register',{
          username : newUser.username,
          email : newUser.email,
          password : newUser.password,
          passwordConf : newUser.passwordConf,
      })

}

export const login = (user) => {
    return axios
    .post('http://localhost:8080/auth/login',{
        username : user.username,
        password : user.password
    })
}