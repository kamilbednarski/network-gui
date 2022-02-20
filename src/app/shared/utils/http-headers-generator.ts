import { HttpHeaders } from "@angular/common/http";

export class HttpHeadersGenerator {

    static generateHttpHeaders(): HttpHeaders{
        return new HttpHeaders({ "Content-Type": "application/json" });
    }

    static generateHttpHeadersWithAuthRequired(): HttpHeaders{
        return new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization-Required": "true"
        });
    }
}
