import { Results } from "./results";

export interface Pokemon{
    count: number,
    previous: string,
    next: string,
    results: Results[]
}