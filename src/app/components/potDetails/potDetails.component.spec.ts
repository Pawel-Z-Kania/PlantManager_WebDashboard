import { TestBed, ComponentFixture } from "@angular/core/testing";
import { PotDetailsComponent } from "./potDetails.component";


describe('PotDetailsComponent', () => {
    let component: PotDetailsComponent;
    let fixture: ComponentFixture<PotDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule(
            { imports: [PotDetailsComponent] }
        ).compileComponents();

        fixture = TestBed.createComponent(PotDetailsComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    })

    it('should create component', () => {
        expect(component).toBeTruthy;
    })
})