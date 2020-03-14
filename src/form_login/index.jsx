import React from 'react';
import './index.css';

const FormLogin = () => {
    return (
        <React.Fragment>
        <p align="center" className="a">Form Login</p>
        
        <div className="box">
            <div>
                <p className="b">Tugas Pertemuan Ketiga</p>
                <p></p>
                <form>
                    <label for="uname">Username:</label><br/>
                        <input type="text" id="uname" name="uname" placeholder="Masukkan Username"/><br/>
                    <label for="pw">Password</label><br/>
                        <input type="text" id="pw" name="pw" placeholder="Masukkan Password Anda"/><br/><br/>
                        <input type="checkbox" name="remember" id="remember"/>Remember Me<br></br>
                        <input type="submit" value="Login" class="button"/>
                </form>
            </div>
          </div>
          </React.Fragment>
    )
}

export default FormLogin;