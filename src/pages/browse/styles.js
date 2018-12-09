import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  flex: 1;
  margin-top: 110px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 48px;

  ${Spinner} {
    height: 24px;
    margin-left: 8px;
  }
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const PlayList = styled(Link)`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-left: 20px;
  width: 250px;
  text-decoration: none;
  margin-top: 30px;

  img {
    height: 250px;
  }
  strong {
    font-size: 13px;
    margin-top: 10px;
  }
  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }

  &:hover img {
    opacity: 0.4;
  }

  &:nth-child(4n + 1) {
    margin-left: 0;
  }
`;
