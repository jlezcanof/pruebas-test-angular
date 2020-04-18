import { mensaje } from "./string";

//agrupacion
//describe('Pruebas de strings', null);


//prueba especifica, una evaluación en concreto
//it('debe de regresar un string');

//it('debe de contener un nombre');

describe('Pruebas de string', () => {

    it('debe de regresar un string', () =>{

    const resp = mensaje('Lezcano');

    expect(typeof resp).toBe('string');

    });

    it('debe de regresar un saludo con el nombre enviado', () =>{

        const nombre = 'Lezcano';
        const resp = mensaje(nombre);
    
        expect(resp).toContain(nombre);
    
        });
});