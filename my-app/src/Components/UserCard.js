
import React from "react";
import Followers from "./Followers";
import styled from "styled-components";

const UserStyle = styled.div`

`;
const UserContainer = styled.div`

`;

const UserCard = props => {
  return (
    <UserStyle>
      <UserContainer>
      <h2>{props.user.name}</h2>
      <img src={props.user.avatar_url} alt='Profile Avatar'/>
      <p>Bio:{props.user.bio}</p>
      </UserContainer>
      <Followers followers={props.followers} />
    </UserStyle>
  );
}

export default UserCard;