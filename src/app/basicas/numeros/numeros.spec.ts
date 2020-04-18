import { incrementar } from "./numeros";



describe('Pruebas de numeros', () => {

    it('Debe de retornar 100, si el numero ingresado es mayor que 100', () =>{

    const resp = incrementar(101);

    expect(resp).toBe(100);

    });

    it('debe de retornar ese numero + 1 si es < 100', () => {

        const resp = incrementar(98);
        expect(resp).toBe(99);
        });
});