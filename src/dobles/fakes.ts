interface Payload {
    username: string;
    password: string;
}

interface Authentication {
    isAuthenticated: boolean;
    authenticate: (payload: Payload) => void;
}

// Simulamos una autenticacion sin necesidad de una conexion a base de datos para
// o a un servidor de autenticacion
// En lugar de eso, se puede crear una instancia de FakeAuthentication en la prueba
//y llamar al método authenticate con diferentes objetos Payload
// para verificar que la lógica de autenticación funciona correctamente.

export class FakeAuthentication implements Authentication {
    isAuthenticated: boolean = false;

    authenticate(payload: Payload): void {
        if (payload.username === 'Bob' && payload.password === 'Ross') {
            this.isAuthenticated = true;
        }
    }
}
