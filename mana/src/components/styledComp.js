import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-block;
  color: white;
  background: #156dd4;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.5);
  &:active{
    color: white;
  }
`;