import { Session } from "pioche";
//import * as JWT from "@tsndr/cloudflare-worker-jwt";

export function easyPreflight(session: Session, next: any){
    if(session.request.method === "OPTIONS"){
        session.logger.log("EXECUTING PREFLIGHT RESPONSE");
        const headers = {
            Allow: "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Expose-Headers": "*",
        };
        return {headers};
    }
    return next;
}

/**
 * Basic implementation for JWT issuing, reading, and validation
 */
//  export const jwt = {
//     sign: (message: object) => {
//         return JWT.sign(message, globalThis.env.JWT_KEY);
//     },
//     verify: (token: string) => {
//         return JWT.verify(token, globalThis.env.JWT_KEY);
//     },
//     read: (token: string) => {
//         return JWT.decode(token);
//     },
//     read_if_valid: (token: string) => {
//         return jwt.verify(token) ? jwt.read(token) : false;
//     }
// };