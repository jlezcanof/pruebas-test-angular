import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs/internal/observable/empty';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';//TODO se puede mejorar la importacion'

class FakeRouter {
  navigate(params){}
}

class FakeActivatedRoute {
  //params: Observable<any> = empty();

  private subject = new Subject();

  push(valor) {
    this.subject.next(valor);
  }

  get params() {
    return this.subject.asObservable();
    // regresar un nuevo observable
  }

}


describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        {provide: Router, useClass: FakeRouter},
         {provide: ActivatedRoute, useClass: FakeActivatedRoute}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it ('Debe de redireccionar a medico cuando se guarde', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);

  });

  it ('Debe de colocar el id = nuevo', () => {

    component = fixture.componentInstance;

    const activateRoute: FakeActivatedRoute =  TestBed.get(ActivatedRoute);

    activateRoute.push({id: 'nuevo'});

    expect(component.id).toBe('nuevo');
  });

  
});
