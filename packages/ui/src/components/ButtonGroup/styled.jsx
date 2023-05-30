import styled from 'styled-components';

export const StyledButtonGroup = styled.div`
  & button {
    &:first-child {
      border-top-right-radius: unset;
      border-bottom-right-radius: unset;
    }

    &:last-child {
      border-top-left-radius: unset;
      border-bottom-left-radius: unset;
    }

    &:not(:first-child, :last-child) {
      border-radius: unset;
    }
  }
`;
