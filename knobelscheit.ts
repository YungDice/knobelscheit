export class Knobelscheit {
    zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    istOffen(zahl: number): boolean {
        return this.zahlen.includes(zahl);
    }

    rausnehmen(zahl:number): void{
        this.zahlen.splice(this.zahlen.indexOf(zahl));
    }
}