import React from 'react';
import * as Icon from 'react-feather';
import { Fade } from 'react-reveal';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SuccessMessage = styled.h2`
  font-size: 25px;
  color: rgb(8, 8, 63);
  text-align: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SuccessPage = () => {
  return (
    <React.Fragment>
      <Fade bottom duration={700} distance="60px">
        <MessageWrapper>
          <Icon.CheckCircle color="rgb(8, 8, 63)" style={{ width: 50, height: 50 }} />
          <SuccessMessage className="sucess-message">MESSAGE SENT SUCCESSFULLY</SuccessMessage>
        </MessageWrapper>
      </Fade>
    </React.Fragment>
  );
};

export default SuccessPage;
