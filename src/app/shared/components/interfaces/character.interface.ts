import { Biography } from "./Biography.interface";
import { Powerstats } from "./Powerstats.interface";
import { Image } from "./Image.interface";
import { work } from "./work.interface";

export interface Character {
    id: string;
    name: string;
    biography: Biography;
    powerstats: Powerstats;
    image: Image;
    work: work;
}