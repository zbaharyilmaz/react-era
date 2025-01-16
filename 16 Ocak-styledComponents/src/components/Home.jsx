import React from 'react';
import DivStyle from './style/ContainerStyle';
import HeaderS, { LinkS } from './style/HeaderStyle';
import ButtonS, { PinkButton } from './style/ButonStyle';
// named export olduğu için LinkS importunda süslü kullanıldı.

const Home = () => {
  return (
    <DivStyle>
<HeaderS>CSS Dersleri</HeaderS>
<LinkS href='#'>Ders Linki</LinkS>
<ButtonS Zey>Tıkla1</ButtonS>
<ButtonS Mudlond>Tıkla2</ButtonS>
<ButtonS>Tıkla3</ButtonS>
<ButtonS>Tıkla4</ButtonS>
<ButtonS>Tıkla5</ButtonS>
<PinkButton Bahar>Yancı Tıkla6</PinkButton>


    </DivStyle>
  )
}

export default Home