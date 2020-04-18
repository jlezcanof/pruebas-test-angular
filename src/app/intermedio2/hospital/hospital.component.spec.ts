import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponent } from './hospital.component';

describe('HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;

  //async indica que se espera hasta que retorne/termine (asincrono)
  //esto lo hace por si demora la compilacion por el html
  beforeEach(async(() => {
    // TestBed.configureTestingModule({
    //   declarations: [ HospitalComponent ]
    // })
    //.compileComponents();// no seria necesario al estar trabajando
    //en webpack (pues tiene tanto el html como el ts)
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalComponent ]
    });

    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de crear un HospitalComponent', () => {
    expect(component).toBeTruthy();
  });
});
