import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
// import { Container } from './styles';

export default function Button({
  label,
  iconName,
  iconColor,
  backgroundColor,
  iconSize,
  labelColor,
  center,
  onPress,
  width,
  height,
  borderRadius,
  rigth,
  left,
  marginRigth,
}) {
  return (
    <View
      style={{
        flex: 1,

        height: 80,
        marginTop: 80,

        right: rigth,
        left,
        justifyContent: 'space-around',
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: '#3b4145',
          borderRadius,
          marginRigth,
          width,
          height: 100,
        }}
      >
        <View>
          <View
            style={{
              height,
              left: 8,
            }}
          >
            <MaterialIcons name={iconName} color={iconColor} size={iconSize} />
          </View>
          <Text
            style={{
              width: 200,

              fontSize: 13,
              left: 8,
              marginTop: 45,
              bottom: 25,
              alignSelf: 'flex-start',
              color: labelColor,
            }}
            numberOfLines={2}
          >
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
