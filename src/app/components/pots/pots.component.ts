import { Component, inject, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PotsService } from "../../services/pots.service";
import { error } from "console";
import { Pot } from "../../models/pot.model";

@Component({
    selector: 'pot-list',
    standalone: true,
    imports: [
        CommonModule
    ],
    templateUrl: './pots.component.html',
    styleUrl: './pots.component.scss'
})

export class PotListComponent implements OnInit {
    private potsService = inject(PotsService);
    potList = signal<Pot[] | null>(null);

    ngOnInit(): void {
        this.fetchPotsData();
    }

    fetchPotsData(): void {
        this.potsService.getPots().subscribe({
            next: (response) => {
                this.potList.set(response)
                //    console.log('Data loaded ', response);
            },
            error: (err) => {
                console.error('Data not loaded properly', err);
            }
        })
    }
}


