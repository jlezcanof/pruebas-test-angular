import { obtenerRobots } from "../booleanos/arreglos";


describe('Pruebas de arreglos', () => {

    it('Debe de retornar al menos 3 robots', () => {

        const robots = obtenerRobots();

        expect(robots.length).toBeGreaterThanOrEqual(3);
    });

    it('Debe de existir Megaman y Ultron', () => {

        const robots = obtenerRobots();

        expect(robots).toContain('Megaman');
        expect(robots).toContain('Ultron');
    });

});