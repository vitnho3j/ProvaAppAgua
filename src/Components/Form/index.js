import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal, Alert } from "react-native";
import {Picker} from "@react-native-picker/picker";
import TakePicture from '../Camera';
import { estilos } from '../Style/index';


export default function Form() {

    const [bairro, setBairro] = useState(null);
    const [numero, setNumero] = useState(null);
    const [codigo, setCodigo] = useState(null);
    const [rua, setRua] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

  
    function confirmarEnvio() {
        setIsOpen(false)
        setBairro(null)
        setRua(null)
        setNumero(null)
        setSelectedValue("default")
        return <Text style={estilos.label}>REP</Text>
    }


    function validar(){
        if (numero != null && selectedValue != "defautl" && codigo != null){
            setIsOpen(true)
        }
        else{
            Alert.alert('Todos os campos precisam ser preenchidos')
        }
    }


    return (
        <View>
            <View style={estilos.form}>
                  <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >   
                    <Picker.Item label="Informe a Cidade" value="default" />
                    <Picker.Item label="Vassouras" value="Opcao 1" />
                    <Picker.Item label="Barra do Piraí" value="Opcao 2" />
                    <Picker.Item label="Mendes" value="Opcao 3" />
                    <Picker.Item label="Três Rios" value="Opcao 4" />
                    <Picker.Item label="Paraíba do Sul" value="Opcao 6" />
                    <Picker.Item label="Miguel Pereira" value="Opcao 7" />
                    <Picker.Item label="Valença" value="Opcao 8" />
                    <Picker.Item label="Rio das Flores" value="Opcao 9" />
                </Picker>
                <Text style={estilos.label} >Informe o Bairro</Text>
                <TextInput 
                style={estilos.input}
                onChangeText={setBairro} 
                value={bairro} 
                />
                <Text style={estilos.label}>Informe a Rua</Text>
                <TextInput 
                onChangeText={setRua} 
                value={rua}
                style={estilos.input} />
                <Text style={estilos.label} >Informe o Número</Text>
                <TextInput 
                style={estilos.input}
                keyboardType="numeric" 
                onChangeText={setNumero} 
                value={numero} 
                />
                <Text style={estilos.label}>Descrição</Text>
                <TextInput 
                onChangeText={setCodigo} 
                value={codigo}
                style={estilos.inputDescription} />
                <TouchableOpacity style={estilos.button} 
                onPress={() => validar()} >
                <Text style={estilos.buttonText}>
                    Take
                </Text>
                </TouchableOpacity>
                
            </View>
            <Modal transparent={true} visible={isOpen}>
                <TakePicture 
                    rua={rua}
                    numero={numero}
                    bairro={bairro}
                    situacao={selectedValue}
                    confirmarEnvio={confirmarEnvio}
                    
                />
                  
            </Modal> 

        </View>
    );
}