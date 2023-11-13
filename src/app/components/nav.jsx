'use client'
import { useRouter } from "next/navigation";
export default function NavBar(){
    const router = useRouter()
    const logout = () => {
      localStorage.removeItem('name');
      localStorage.removeItem('id');
      localStorage.removeItem('password');
      router.push('/login')
    }
    return (
        <div>
            <nav>    
                <div className="topnav" >
                    <a className="active alinearI" href="../inicio">Inicio</a>
                    <a href="../modelos">Modelos</a>
                    <a href="../crearModelos">Crear Modelo</a>
                    <a className="logout" ><button onClick={logout} className='logout'><img src="https://img.pikbest.com/element_our/20230309/bg/ed729112ee4da.png!f305cw" alt="logout" width={35} height={35}/>
                    <h5>Logout</h5></button></a>
                    
                </div>
            </nav>
        </div> 
    )
}