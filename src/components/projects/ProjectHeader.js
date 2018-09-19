import React, { Component } from "react";

import styled from "styled-components";

const InfoTilte = styled.div`
  letter-spacing: 3px;
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 16px;
`;
const InfoText = styled.div`
  letter-spacing: 0.9px;
  font-size: 16px;
  font-weight: 100;
  line-height: 2;
`;

const ProjectInfo = styled.div`
  margin: 20px;
  width: 140px;
  flex-grow: 1;
  text-align: center;
`;

const List = styled.div`
  justify-content: ${props => (props.center ? "center" : "left")};
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 20px;
  background: #f2f2f0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Main = styled.div``;

class ProfileHeader extends Component {
  render() {
    const Information = this.props.information.map(info => {
      return (
        <ProjectInfo>
          <InfoTilte> {info.title}</InfoTilte>
          <InfoText>{info.text}</InfoText>
        </ProjectInfo>
      );
    });

    return (
      <Main>
        <List center>{Information}</List>
      </Main>
    );
  }
}

export default ProfileHeader;