import React from 'react'
import styled from 'styled-components';
import { BiLogOut } from "react-icons/bi";
const ADMIN = process.env.USER_ADMIN;

class User extends React.Component {
    render() {
        const { email } = this.props;

        return (
            <Block>
                <UserBlock>
                    <Name> {email}</Name>
                    <Rol> Rol: User </Rol>
                </UserBlock>
                <Login>
                    <BiLogOut />
                </Login>
            </Block>
        )
    }
}

export default User

const Block = styled.div`
    background-color: #F5F9FC;
    width: 70%;
    padding: 30px;
    border: 1px solid #F1F1F1;
    border-radius: 20px;
`
const Name = styled.div`
    margin-left: 20px;
`
const Rol = styled.div`
    margin-left: 20px;
`
const UserBlock = styled.div`
    position: relative;
    float: left;
    display: contents;
`
const Login = styled.button`
    position: relative;
    float: right;
    display: inline-flex;
    border: none;
`