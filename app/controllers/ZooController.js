//animal imports
import { Tiger } from "../models/Tiger.js"
import { Wombat } from "../models/Wombat.js"

//private
let _TigerCage = {
    steve: new Tiger('steve', 20),
    kevin: new Tiger('kevin', 10),
    lucy: new Tiger('lucy', 24)
}
let _WombatCage = {
    shmooby = new Wombat('shmooby', 2),
    schlooby = new Wombat('schlooby', 3)
}


//public
export class ZooController {
    constructor() {
        console.log(_TigerCage)
    }
}