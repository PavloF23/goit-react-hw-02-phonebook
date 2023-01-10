import styled from '@emotion/styled';

export const Container = styled.div`
margin-top: 30px;
width: 100%;
height: 70px;
align-items: center;
`;

export const Label = styled.label`
    position: relative;
    display: block;
    margin-top: 10px;
    color: #000;
    font-size: 18px;

    & input:focus ~ span {
        transform: translateX(-13px) translateY(-30px);
        font-size: 20px;
    }
`;

export const Input = styled.input`
position: absolute;
top: 0;
left: 0;
width: 100%;
border: 2px solid rgba(33, 33, 33, 0.2);
color: #000;
outline: none;
background: #fff;
padding: 10px;
border-radius: 10px;
font-size: 20px;

    &:focus {
        outline-color: rgba(33, 33, 33, 0.5);
      }
`; 

export const Span = styled.span`
position: absolute;
top: 5px;
left: 10px;
font-size: 30px;
transition: 0.6s;
color: #5793aad2;
`;