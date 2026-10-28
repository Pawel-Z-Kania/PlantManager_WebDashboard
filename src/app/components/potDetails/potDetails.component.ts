import { Component, Injectable, inject } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DatePipe } from "@angular/common";
import { PotsService } from "../../services/pots.service";


@Component({
    selector: 'pot-details',
    imports: [
        DatePipe
    ],
    templateUrl: './potDetails.component.html',
    styleUrl: './potDetails.component.scss',
})

export class PotDetailsComponent {
    private potsService = inject(PotsService);


}