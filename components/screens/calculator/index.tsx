import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bracketAction, numberAction} from '../../redux/actions/number';

const Calculator = () => {
  const number = useSelector((state: any) => state.numberReducer.number);

  const bracket = useSelector((state: any) => state.bracketReducer.bracket);

  const dispatch = useDispatch();

  const calculation = (value: string) => {
    if (value === 'AC') {
      dispatch(numberAction('0'));
    } else if (value === '=') {
      try {
        if (
          (number.match(/\(/g) || []).length ===
          (number.match(/\(/g) || []).length
        ) {
          if (
            number.slice(-1) === '+' ||
            number.slice(-1) === '-' ||
            number.slice(-1) === '*' ||
            number.slice(-1) === '/' ||
            number.slice(-1) === '%' ||
            number.slice(-1) === '.'
          ) {
            dispatch(
              numberAction(`${eval(number.replace('()', '(0)').slice(0, -1))}`),
            );
          } else {
            dispatch(numberAction(`${eval(number.replace('()', '(0)'))}`));
          }
        } else {
        }
      } catch (e) {
        dispatch(numberAction('Error'));
      }
    } else if (value === '<') {
      dispatch(numberAction(number.slice(0, -1)));
    } else if (value === '()') {
      if (number === '0') {
        dispatch(numberAction('('));
        dispatch(bracketAction(true));
      } else if (
        number.slice(-1) === '+' ||
        number.slice(-1) === '-' ||
        number.slice(-1) === '*' ||
        number.slice(-1) === '/' ||
        number.slice(-1) === '%' ||
        number.slice(-1) === '.'
      ) {
        dispatch(numberAction(number + '('));
        dispatch(bracketAction(true));
      } else {
        if (bracket == true) {
          dispatch(numberAction(number + ')'));
          dispatch(bracketAction(false));
        } else {
          dispatch(numberAction(number + '('));
          dispatch(bracketAction(true));
        }
      }
    } else if (number === 'Error') {
      dispatch(numberAction(value));
    } else {
      if (number === '0') {
        if (isNaN(Number(value))) {
          dispatch(numberAction(number + value));
        } else {
          dispatch(numberAction(value));
        }
      } else if (isNaN(Number(value))) {
        if (
          number.slice(-1) === '+' ||
          number.slice(-1) === '-' ||
          number.slice(-1) === '*' ||
          number.slice(-1) === '/' ||
          number.slice(-1) === '%' ||
          number.slice(-1) === '.'
        ) {
          dispatch(numberAction(number.slice(0, -1) + value));
        } else {
          dispatch(numberAction(number + value));
        }
      } else {
        dispatch(numberAction(number + value));
      }
    }
  };

  const scrollViewRef = useRef();

  return (
    <View style={styles.mainscreen}>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({animated: true})
        }
        style={styles.maindisplay}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>
          {number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Text>
      </ScrollView>

      <View style={styles.keypad}>
        <View style={styles.keypadrow}>
          <TouchableOpacity
            style={styles.btn1}
            onPress={() => calculation('AC')}>
            <Text style={styles.bg1}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => calculation('()')}>
            <Text style={styles.bg2}>( )</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => calculation('%')}>
            <Text style={styles.bg2}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => calculation('/')}>
            <Text style={styles.bg2}>/</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.keypadrow}>
          <TouchableOpacity style={styles.btn} onPress={() => calculation('7')}>
            <Text style={styles.bg}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => calculation('8')}>
            <Text style={styles.bg}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => calculation('9')}>
            <Text style={styles.bg}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => calculation('*')}>
            <Text style={styles.bg2}>*</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.keypadrow}>
          <TouchableOpacity style={styles.btn} onPress={() => calculation('4')}>
            <Text style={styles.bg}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => calculation('5')}>
            <Text style={styles.bg}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => calculation('6')}>
            <Text style={styles.bg}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => calculation('-')}>
            <Text style={styles.bg2}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.keypadrow}>
          <TouchableOpacity style={styles.btn} onPress={() => calculation('1')}>
            <Text style={styles.bg}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => calculation('2')}>
            <Text style={styles.bg}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => calculation('3')}>
            <Text style={styles.bg}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => calculation('+')}>
            <Text style={styles.bg2}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.keypadrow}>
          <TouchableOpacity style={styles.btn} onPress={() => calculation('0')}>
            <Text style={styles.bg}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => calculation('.')}>
            <Text style={styles.bg2}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn1}
            onPress={() => calculation('<')}>
            <Text style={styles.bg1}>&lt;</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => calculation('=')}>
            <Text style={styles.bg2}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainscreen: {
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  maindisplay: {
    elevation: 10,
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  text: {
    color: 'black',
    fontSize: 50,
    textAlign: 'right',
  },
  keypad: {
    width: '100%',
    height: '70%',
    display: 'flex',
  },
  keypadrow: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor:'white',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  btn1: {
    width: 90,
    height: 90,
    backgroundColor: '#C050FF',
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
  },
  bg1: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  btn2: {
    width: 90,
    height: 90,
    backgroundColor: '#000000',
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
  },
  bg2: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  btn: {
    width: 90,
    height: 90,
    backgroundColor: '#FF508F',
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  bg: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Calculator;
