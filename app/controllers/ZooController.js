//animal imports
import { Tiger } from "../models/Tiger.js"

//private
let _TigerCage = {
    steve: new Tiger('steve', 20)
}


//public
export class ZooController {
    constructor() {
        console.log(_TigerCage)
    }
}