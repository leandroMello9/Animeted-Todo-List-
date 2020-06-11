import React, { useState } from 'react';
import {
  View,
  DatePickerAndroid,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';
import * as Animetable from 'react-native-animatable';
import { bindActionCreators } from 'redux';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { addTodo, updatedTodo } from '../../store/todo/actions';
import InputContainer from '../../components/Form';
import Button from '../../components/Button';

function Add({ addTodo, navigation, route, updatedTodo }) {
  const { params } = route;
  console.disableYellowBox = true;
  const [onChange, setOnChange] = useState(new Date());
  const [isFavority, setIsFavority] = useState(false);
  const [description, setDescription] = useState(
    params.edited ? params.item.todo.description : ''
  );
  const [name, setName] = useState(params.edited ? params.item.todo.name : '');

  const [buttonTop, setToButton] = useState(80);
  const dateFomarted = moment(onChange).format('DD/MM/YYYY');
  const date = new Date();
  async function handleOpenPicker() {
    const { action, year, month, day } = await DatePickerAndroid.open({
      mode: 'spinner',
      date,
    });

    // Se o usuario selecionou alguma data
    if (action === DatePickerAndroid.dateSetAction) {
      const selectedDate = new Date(year, month, day);

      const dateIsBefore = moment(selectedDate).isBefore(new Date());

      if (dateIsBefore) {
        setOnChange(new Date());
      } else {
        setOnChange(selectedDate);
      }
    }
  }
  async function newTodo() {
    const { params } = route;
    const { edited } = params;
    const todo = {
      id: edited ? params.item.todo.id : String(Math.random()),
      name,
      description,
      date: onChange,
      isFavority,
      status: false,
    };
    if (edited) {
      updatedTodo(todo.id, todo);
      navigation.navigate('List');
    } else {
      navigation.goBack();
      addTodo(todo);
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#3b4145' }}>
      <Animetable.View
        animation="bounceInUp"
        useNativeDriver
        duration={2200}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',

          backgroundColor: '#2f3437',
        }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: 35 }}>
          <KeyboardAvoidingView
            style={{
              flex: 1,
              backgroundColor: '#2f3437',
              justifyContent: 'center',
            }}
            behavior="height"
          >
            <InputContainer
              placeholder="Digite aqui o Titulo"
              nameIcon="note-add"
              sizeIcon={25}
              colorIcon="#fff"
              bottom
              value={name}
              onChange={(values) => setName(values)}
            />
            <View style={{ width: 350 }}>
              <InputContainer
                placeholder="Digite aqui a descrição"
                nameIcon="description"
                sizeIcon={25}
                value={description}
                colorIcon="#fff"
                onChange={(values) => setDescription(values)}
              />
              <View style={{ marginTop: 25 }}>
                <InputContainer
                  placeholder="Data Selecionada"
                  nameIcon="date-range"
                  sizeIcon={25}
                  colorIcon="#fff"
                  editable={false}
                  value={String(dateFomarted)}
                />
              </View>
              <View
                style={{
                  top: 28,
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  left: 7,
                }}
              >
                <TouchableOpacity onPress={() => handleOpenPicker()}>
                  <View>
                    <FontAwesome name="calendar" size={27} color="#fff" />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsFavority(!isFavority)}>
                  <View>
                    <MaterialIcons
                      name={isFavority ? 'favorite' : 'favorite-border'}
                      size={34}
                      color="#fff"
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View>
                    <MaterialIcons name="close" size={34} color="#fff" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                marginTop: buttonTop,
                alignSelf: 'center',
              }}
            >
              <TouchableOpacity onPress={() => newTodo()}>
                <View>
                  <MaterialIcons name="note-add" size={50} color="#fff" />
                </View>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </Animetable.View>
    </View>
  );
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addTodo, updatedTodo }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Add);
