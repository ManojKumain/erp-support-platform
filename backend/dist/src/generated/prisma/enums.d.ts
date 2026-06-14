export declare const UserRole: {
    readonly ADMIN: "ADMIN";
    readonly SUPPORT_AGENT: "SUPPORT_AGENT";
    readonly EMPLOYEE: "EMPLOYEE";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const IncidentStatus: {
    readonly OPEN: "OPEN";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly RESOLVED: "RESOLVED";
    readonly CLOSED: "CLOSED";
};
export type IncidentStatus = (typeof IncidentStatus)[keyof typeof IncidentStatus];
export declare const IncidentPriority: {
    readonly P1: "P1";
    readonly P2: "P2";
    readonly P3: "P3";
    readonly P4: "P4";
};
export type IncidentPriority = (typeof IncidentPriority)[keyof typeof IncidentPriority];
