import { StyledNav, StyledNavLink } from "components/NavBar/Navigation.styled"

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