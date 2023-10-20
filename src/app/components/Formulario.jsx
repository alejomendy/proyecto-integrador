// "use client"
// import React, { useState } from 'react';

// function Formulario() {
//   const [nombre, setNombre] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`Nombre: ${nombre}, Email: ${email}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>
//           Nombre del campo:
//           <input
//             type="text"
//             value={nombre}
//             onChange={(e) => setNombre(e.target.value)}
//           />
//         </label>
          
//         <label className='separar'>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
        
//       </div>
//       <button type="submit">Enviar</button>
//     </form>
//   );
// }

// export default Formulario;
