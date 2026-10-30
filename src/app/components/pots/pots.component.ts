import { Component, inject, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PotsService } from "../../services/pots.service";

@Component({
    selector: 'pot-list',
    standalone: true,
    imports: [
        CommonModule
    ],
    templateUrl: './pots.component.html',
    styleUrl: './pots.component.scss'
})

export class PotListComponent {
    private potsService = inject(PotsService);

    onSelect(id: string) {
        this.potsService.selectPot(id);
    }
}

