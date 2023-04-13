import React from 'react';
import * as S from './styles';
import { useRouter } from 'next/router';

import LogoClara from '../../assets/logoClara.png';

export default function Header() {
  
  const router = useRouter();

  const Button = ({ children, ...props }) => {
    return <S.FazerLoginButtonContainner {...props}>{children}</S.FazerLoginButtonContainner>
  }

  return(
    <>
      <S.Container>
        <S.LogoGroup>
          <S.Logo source={LogoClara}></S.Logo>
        </S.LogoGroup>

        <S.NavigationGroup>
          <S.NavigationItem active={router.pathname === '/'} href="/">Início</S.NavigationItem>
          <S.NavigationItem active={router.pathname === '/'} href="/">Seja Cliente</S.NavigationItem>
          <S.NavigationItem active={router.pathname === '/'} href="/">Contato</S.NavigationItem>

          <Button>Fazer Login</Button>
        </S.NavigationGroup>
      </S.Container>
    </>
  )
}

// EXPORTAR CADA COMPONENTE NO STYLES.TS E DAR AS PROPRIEDADES DE ESTILIZAÇÃO PARA ELES, ESSE HEADER NÃO TÁ FINALIZADO, EXEMPLO DE ESTRUTURA

