import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isFavority } from '../../store/todo/actions';
// import { Container } from './styles';

function TodoItem({ item, navigation, isFavority }) {
  const { todo } = item;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('InfoItem', { item })}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',

        marginBottom: 15,
      }}
    >
      <View style={{ width: 180, height: 50 }}>
        <Text style={{ fontSize: 14, color: '#ebebeb' }} numberOfLines={2}>
          {todo.name}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          isFavority(todo);
        }}
        style={{
          borderWidth: 4,
          width: 30,
          height: 30,
          borderRadius: 30,
          borderColor: item.status ? '#98FB98' : '#eee',
        }}
      >
        <View style={{ alignSelf: 'center' }}>
          <MaterialIcons
            name="check"
            size={22}
            color={todo.status ? '#98FB98' : '#eee'}
          />
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ isFavority }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
