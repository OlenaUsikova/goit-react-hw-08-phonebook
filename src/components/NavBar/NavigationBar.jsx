import { StyledNav, StyledNavLink } from "components/NavBar/StyledNavigation"

export const NavigationBar =()=>{
    return(
        <StyledNav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="login">Login</StyledNavLink>
            <StyledNavLink to="registration">Registration</StyledNavLink>
            <StyledNavLink to="contacts">Contacts</StyledNavLink>
        </StyledNav>
    )
}