import { UserAuthority } from "./user-authority.model";

export interface UserDetails {
    id: number
    username: string,
    firstName: string,
    lastName: string,
    lastLogin: string,
    userRole: string,
    authorities: UserAuthority[],
    accountNonExpired: boolean,
    accountNonLocked: boolean,
    credentialsNonExpired: boolean,
}