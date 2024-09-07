import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: BMICalculator(),
    );
  }
}

class BMICalculator extends StatefulWidget {
  @override
  _BMICalculatorState createState() => _BMICalculatorState();
}

class _BMICalculatorState extends State<BMICalculator> {
  TextEditingController weightController = TextEditingController();
  TextEditingController heightController = TextEditingController();
  String resultText = "IMC Calculado";
  bool isWeightSelected = true;

  String getBMICategory(double bmi) {
    if (bmi < 18.5) {
      return "Abaixo do peso";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Peso normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Sobrepeso";
    } else if (bmi >= 30 && bmi < 34.9) {
      return "Obesidade grau 1";
    } else if (bmi >= 35 && bmi < 39.9) {
      return "Obesidade grau 2";
    } else {
      return "Obesidade grau 3";
    }
  }

  void calculateBMI() {
    double weight = double.tryParse(weightController.text) ?? 0;
    double heightCm = double.tryParse(heightController.text) ?? 0;
    double height = heightCm / 100;

    if (weight > 0 && height > 0) {
      double bmi = weight / (height * height);
      String category = getBMICategory(bmi);
      setState(() {
        resultText = "IMC: ${bmi.toStringAsFixed(2)} ($category)";
      });
    } else {
      setState(() {
        resultText = "Valores inválidos";
      });
    }
  }

  void handleButtonPress(String value) {
    setState(() {
      if (isWeightSelected) {
        weightController.text += value;
      } else {
        heightController.text += value;
      }
    });
  }

  void toggleField() {
    setState(() {
      isWeightSelected = !isWeightSelected;
    });
  }

  void onFieldTap(bool isWeight) {
    setState(() {
      isWeightSelected = isWeight;
    });
  }

  Widget buildInputField(String hintText, TextEditingController controller,
      {bool readOnly = false, bool isWeight = true}) {
    return GestureDetector(
      onTap: () => onFieldTap(isWeight),
      child: Container(
        margin: const EdgeInsets.symmetric(vertical: 4.0),
        child: TextField(
          controller: controller,
          decoration: InputDecoration(
            hintText: hintText,
            hintStyle: TextStyle(color: Colors.blue),
            filled: true,
            fillColor: Colors.grey[200],
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(10),
              borderSide: BorderSide.none,
            ),
          ),
          style: TextStyle(color: Colors.blue),
          readOnly: readOnly,
          keyboardType: TextInputType.number,
        ),
      ),
    );
  }

  Widget buildButton(String text,
      {bool isEnter = false, Function()? onPressed}) {
    return Expanded(
      child: Padding(
        padding: const EdgeInsets.all(2.0),
        child: ElevatedButton(
          onPressed: onPressed,
          style: ElevatedButton.styleFrom(
            backgroundColor: isEnter ? Colors.blueAccent : Colors.blue,
            padding: EdgeInsets.symmetric(vertical: 15),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(10),
            ),
          ),
          child: Text(
            text,
            style: TextStyle(fontSize: 20, color: Colors.white),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              Container(
                width: double.infinity,
                padding: EdgeInsets.symmetric(vertical: 10, horizontal: 10),
                decoration: BoxDecoration(
                  color: Colors.blue,
                  borderRadius: BorderRadius.circular(2),
                ),
                child: Text(
                  'Calculadora IMC',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 26,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              ClipRRect(
                borderRadius: BorderRadius.circular(2),
                child: Image.asset(
                  'assets/imcc.jpg',
                  height: 180,
                  width: double.infinity,
                  fit: BoxFit.cover,
                ),
              ),
              Column(
                children: [
                  buildInputField('Peso: Digite o Peso', weightController,
                      isWeight: true),
                  buildInputField('Altura: Digite a altura', heightController,
                      isWeight: false),
                  buildInputField(resultText, TextEditingController(),
                      readOnly: true),
                ],
              ),
              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Row(
                    children: <Widget>[
                      buildButton('7', onPressed: () => handleButtonPress('7')),
                      buildButton('8', onPressed: () => handleButtonPress('8')),
                      buildButton('9', onPressed: () => handleButtonPress('9')),
                      buildButton('ENTER',
                          isEnter: true, onPressed: calculateBMI),
                    ],
                  ),
                  Row(
                    children: <Widget>[
                      buildButton('4', onPressed: () => handleButtonPress('4')),
                      buildButton('5', onPressed: () => handleButtonPress('5')),
                      buildButton('6', onPressed: () => handleButtonPress('6')),
                      buildButton('PROX', onPressed: toggleField),
                    ],
                  ),
                  Row(
                    children: <Widget>[
                      buildButton('1', onPressed: () => handleButtonPress('1')),
                      buildButton('2', onPressed: () => handleButtonPress('2')),
                      buildButton('3', onPressed: () => handleButtonPress('3')),
                      buildButton('0', onPressed: () => handleButtonPress('0')),
                    ],
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
