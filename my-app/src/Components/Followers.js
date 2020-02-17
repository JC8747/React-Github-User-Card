import React from "react";
import styled from "styled-components";

const FollowerStyle = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: #00f0e4
`;
const FollowerContainer = styled.div`
    width: 40%;
    margin-top: 10px;
    padding-bottom: 10px;
    background: #ff00dd;

[type ="img"]{
    width: 40%;
    border: 10px solid red;
}
`;

const Followers = props => {
  return (
    <FollowerStyle>
      {props.followers.map(item => (
          <FollowerContainer>
          <h2>{item.login}</h2>
          <img src={item.avatar_url} alt="User Avatar" />
          </FollowerContainer>
      ))}
      </FollowerStyle>
  );
}

export default Followers;