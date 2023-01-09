import styled from '@emotion/styled';

export const List = styled.ul` 
position: relative;
display: flex;
flex-direction: column;
gap: 20px;
margin-top: 30px;  
color: #000;  
font-weight: 500;  
font-size: 20px;
`;

export const Item = styled.li`
display: flex;
justify-content: space-between;

&:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Contact = styled.p``;

export const Button = styled.button`
width: 30px;
height: auto;
cursor: pointer;
display: inline-block;
background-image: url(../../img/delete.svg);
background-repeat: no-repeat;
background-size: contain;
background-color: transparent;
border: none;
outline: none;
transition: transform 250ms var(--timingFn);

&:hover {
transform: scale(1.1);
}
`;