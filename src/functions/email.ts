// // Definimos una interfaz para nuestro objeto
// interface User {
//     id: number;
//     name: string;
//     email?: string;
// }

// // A partir de la interfaz, generamos clases de excepción personalizadas
// // para manejar distintos tipos de errores que puedan ocurrir en ejecucion
// class UserError extends Error {
//     constructor(message: string) {
//         super(message);
//         this.name = "UserError";
//     }
// }

// class InvalidUserError extends Error {
//     constructor(message: string) {
//         super(message);
//         this.name = "InvalidUserError";
//     }
// }

// // Generamos nuestra funcion

// function getUserEmail(user: User): string {
//     if (!user) {
//         throw new InvalidUserError("User object is null or undefined");
//     }

//     try {
//         if (!user.email) {
//             throw new UserError(`User with id ${user.id} does not have an email`);
//         }

//         return user.email;
        
//     } catch (error) {
//         if (error instanceof UserError) {
//             console.error(error.message);
//             return "";
//         } else {
//             throw error;
//         }
//     }
// }