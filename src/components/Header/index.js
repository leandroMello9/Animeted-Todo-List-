import React from 'react';
import { View, Text } from 'react-native';
import { getDay, getMonth, getYear, getDate } from 'date-fns';
// import { Container } from './styles';

export default function Header() {
  const days = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
  ];
  const mounths = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  const c = new Date();

  const a = getDay(c);
  const day = days[a];
  const m = getMonth(c);
  const mounth = mounths[m];
  const year = getYear(c);
  const date = getDate(c);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        right: 16,
        top: 35,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View>
          <Text style={{ fontSize: 35, color: '#ebebeb' }}>{date}</Text>
        </View>
        <View style={{ marginLeft: 8 }}>
          <Text style={{ fontWeight: 'bold', top: 5, color: '#ebebeb' }}>
            {mounth}
          </Text>
          <Text style={{ color: '#ebebeb' }}>{year}</Text>
        </View>
      </View>
      <View />
      <Text style={{ color: '#ebebeb' }}>{day}</Text>
    </View>
  );
}
