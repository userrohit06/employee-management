import { useState } from 'react'
import Swal from 'sweetalert2'

const Login = ({ setIsAuthenticated }) => {

    const adminEmail = 'admin@gmail.com'
    const adminPassword = 'admin_password'

    const [email, setEmail] = useState('admin@gmail.com')
    const [password, setPassword] = useState('admin_password')

    const handleLogin = (e) => {
        e.preventDefault()

        if (email === adminEmail && password === adminPassword) {
            Swal.fire({
                timer: 1500,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading()
                },
                willClose: () => {
                    localStorage.setItem('is_authenticated', true)
                    setIsAuthenticated(true)

                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully logged in!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                        .then(() => {
                            window.location.href = "http://localhost:5174/"
                        })
                }
            })
        } else {
            Swal.fire({
                timer: 1500,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading()
                },
                willClose: () => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Invalid email or password',
                        showConfirmButton: true
                    })
                }
            })
        }
    }

    return (
        <div className='small-container'>
            <form onSubmit={handleLogin}>
                <h1>Admin Login</h1>

                <label htmlFor="email">Email</label>
                <input
                    id='email'
                    type='email'
                    name='email'
                    placeholder='admin@gmail.com'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    id='password'
                    type='password'
                    name='password'
                    placeholder='admin_password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <input
                    style={{ marginTop: '12px' }}
                    type="submit"
                    value="Login"
                />
            </form>
        </div>
    )
}

export default Login