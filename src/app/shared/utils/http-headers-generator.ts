import { HttpHeaders } from "@angular/common/http";

export class HttpHeadersGenerator {

    public static generateHttpHeaders(): HttpHeaders{
        return new HttpHeaders({ "Content-Type": "application/json" });
    }

    public static generateHttpHeadersWithAuthRequired(): HttpHeaders{
        return new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization-Required": "true"
        });
    }
}
