import Swal from "sweetalert2"

const Logout = ({ setIsAuthenticated }) => {

    // css styles for cancel button
    const style = document.createElement('style')
    style.textContent = `
    .margin-left-button{
        margin-left: 12px;
    }`;
    document.head.appendChild(style)

    const handleLogout = () => {
        Swal.fire({
            icon: 'question',
            title: 'Logging Out',
            text: 'Are you sure you want to log out?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            customClass: {
                cancelButton: 'margin-left-button'
            }
        })
            .then(result => {
                if (result.value) {
                    Swal.fire({
                        timer: 1500,
                        showConfirmButton: false,
                        willOpen: () => {
                            Swal.showLoading();
                        },
                        willClose: () => {
                            localStorage.setItem('is_authenticated', false);
                            setIsAuthenticated(false);
                        }
                    })
                }
            })
    }

    return (
        <button
            style={{ marginLeft: '12px' }}
            className="muted-button"
            onClick={handleLogout}
        >
            Logout
        </button>
    )
}

export default Logout