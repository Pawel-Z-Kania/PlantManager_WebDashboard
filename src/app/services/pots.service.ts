import { Injectable, inject, signal, computed } from '@angular/core'
import { Observable } from "rxjs"
import { environment } from "../env/environment.prod"
import { HttpClient } from '@angular/common/http'
import { Pot } from '../models/pot.model'

@Injectable({
    providedIn: 'root'
})

export class PotsService {
    private potUrl = environment.apiUrl + '/pots';

    private http = inject(HttpClient);

    private potListSignal = signal<Pot[]>([]);
    private seledtedIdSignal = signal<string | null>(null);

    readonly pots = this.potListSignal.asReadonly();

    readonly selectedPot = computed(() => {
        const id = this.seledtedIdSignal();
        const allPots = this.potListSignal();

        if (!id) return null;
        return allPots.find(pot => pot.id === id) || null;
    })

    constructor() {
        this.loadPots();
    }

    private loadPots() {
        this.http.get<Pot[]>(this.potUrl).subscribe({
            next: (data) => {
                this.potListSignal.set(data);
            },
            error: (err) => {
                console.error('Download failed', err);
            }
        })
    }

    selectPot(id: string | null) {
        this.seledtedIdSignal.set(id);
    }
}