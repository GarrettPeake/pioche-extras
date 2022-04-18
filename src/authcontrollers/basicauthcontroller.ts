import { BaseMap, DurableObjectController, PostMap, Session } from "pioche";

@BaseMap("/identity")
export class BasicAuthController extends DurableObjectController {


    @PostMap("/register")
    async register(session: Session){
        
    }
}