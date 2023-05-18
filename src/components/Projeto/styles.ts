import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`
export const LinkBotao = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
