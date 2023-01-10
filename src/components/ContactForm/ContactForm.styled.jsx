import styled from '@emotion/styled';

export const Form = styled.form`
margin-top: 20px;
display: flex;
flex-direction: column;
gap: 24px;
align-items: center;
`;

export const Label = styled.label`
position: relative;
  width: 400px;
  height: 10px;
  margin-bottom: 50px;
  &:last-child{
    margin-bottom: 0;
  }
    & input:focus ~ span,
    & input:valid ~ span{
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
`;

export const Span = styled.span`
position: absolute;
top: 5px;
left: 10px;
font-size: 30px;
transition: 0.6s;
color: #5793aad2;
`;

export const Button = styled.button`
width: 200px;
  height: 50px;
  border-radius: 10px;
  border: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.2s;
  background-color: #fff;
  border: 2px solid rgba(33, 33, 33, 0.2);
  margin-bottom: 20px;

  &:hover{
    background-color: rgb(207, 207, 207);
  }
`;