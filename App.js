import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [history, setHistory] = useState([]);

    const handleInput = (input) => {
        if (displayValue === '0' || displayValue.includes('Error')) {
            setDisplayValue(String(input));
        } else {
            setDisplayValue(displayValue + input);
        }
    };

    const handleClear = () => {
        setDisplayValue('0');
    };

    const handleDelete = () => {
        setDisplayValue(displayValue.slice(0, -1) || '0');
    };

    const handleCalculate = () => {
        try {
            const result = eval(displayValue);
            setHistory([...history, { expression: displayValue, result }]);
            setDisplayValue(String(result));
        } catch (error) {
            setDisplayValue('Error');
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.historyItem}>
            <Text>{item.expression} = {item.result}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.history}>
                <Text style={styles.historyTitle}>History</Text>
                <FlatList
                    data={history}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <View style={styles.display}>
                <Text style={styles.displayText}>{displayValue}</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => handleInput('7')} style={styles.button}>
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleInput('8')} style={styles.button}>
                    <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleInput('9')} style={styles.button}>
                    <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDelete} style={styles.button}>
                    <Text style={styles.buttonText}>DEL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleInput('4')} style={styles.button}>
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleInput('5')} style={styles.button}>
                    <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleInput('6')} style={styles.button}>
                    <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleInput('*')} style={styles.button}>
                    <Text style={styles.buttonText}>*</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleInput('1')} style={styles.button}>
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleInput('2')} style={styles.button}>
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleInput('3')} style={styles.button}>
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleInput('/')} style={styles.button}>
                    <Text style={styles.buttonText}>/</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleInput('0')} style={styles.button}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleInput('.')} style={styles.button}>
                    <Text style={styles.buttonText}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleClear} style={styles.button}>
                    <Text style={styles.buttonText}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleInput('+')} style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCalculate} style={styles.calculateButton}>
                    <Text style={styles.calculateButtonText}>=</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    display: {
        alignItems: 'flex-end',
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    displayText: {
        fontSize: 40,
    },
    buttons: {
        flexDirection: 'row',
         flexWrap: 'wrap',
        marginTop: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
        marginHorizontal: "2.5%",
        marginVertical:"2.3%",
        padding: 25,
        backgroundColor: 'pink',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius:20,
        
    },
    buttonText: {
        fontSize: 16,
    },
    calculateButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    calculateButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    history: {
        flex: 1,
        marginTop: 20,
    },
    historyTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    historyItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default Calculator;

