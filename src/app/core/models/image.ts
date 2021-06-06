import { Byte } from "@angular/compiler/src/util";

export interface Image {
    id: number;
    name: string;
    type: string;
    data: Byte[];
    post_id: number;
    user_id: number;
}
