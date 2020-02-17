import React from "react";
import styled from "styled-components";

const FollowerStyle = styled.div`
    width = 80%;
    margin = 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: #00f0e4;
`;
const FollowerContainer = styled.div`
    background: #f000d4;
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