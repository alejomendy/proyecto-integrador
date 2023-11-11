'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const  VerificarCuenta = () =>{
    const router = useRouter()
    const logout = () => {
      localStorage.removeItem('name');
      localStorage.removeItem('id');
      localStorage.removeItem('password');
      router.push('/login')
    }
    // Intentamos leer la clave Username una vez la pagina carga
    useEffect(() => {
        try {
            const usuarioGuardado = localStorage.getItem('name')
            const passwordGuardado = localStorage.getItem('password')
            if (usuarioGuardado) {
                var usuario = JSON.parse(usuarioGuardado);
                usuario = 'Bienvenido,'+ ' ' + usuario + '!'
                document.getElementById('welcome-message').textContent = usuario;
                fetch('http://localhost:3000/api/users/login',{
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ 
                    name: JSON.parse(usuarioGuardado),
                    password: JSON.parse(passwordGuardado)
                  })})
                  .then(response => {
                    console.log(response)
                    if(response.status === 401){
                      router.push('/login')
                    } else {
                      console.log('Verificado')
                    }
                  })
                } else{
                  console.error('Usuario no valido, se retornara a login');
                  router.push('/login')
                }
              } catch (error) {
                console.error('Error al acceder al Local Storage:', error);
                router.push('/login')
              }
      }, [])
      return (
        
        <div>
          <button onClick={logout} className='logout'><img src="https://img.pikbest.com/element_our/20230309/bg/ed729112ee4da.png!f305cw" alt="logout" width={35} height={35}/>
          <h5>Logout</h5></button>
          <h1 id="welcome-message" className='center'></h1>
        </div>
      )
}

export default VerificarCuenta;