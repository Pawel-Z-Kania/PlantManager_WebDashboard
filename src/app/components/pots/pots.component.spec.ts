import { TestBed, ComponentFixture } from "@angular/core/testing";
import { PotListComponent } from "./pots.component";

describe('PotListComponent', () => {
    let component: PotListComponent;
    let fixture: ComponentFixture<PotListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule(
            { imports: [PotListComponent] }
        ).compileComponents();

        fixture = TestBed.createComponent(PotListComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    })

    it('should create component', () => {
        expect(component).toBeTruthy;
    });
});