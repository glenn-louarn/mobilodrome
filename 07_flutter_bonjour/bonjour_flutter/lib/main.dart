import 'package:flutter/material.dart';

void main() => runApp(MonApplication());

class MonApplication extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        // TODO utilisation du widget Scaffold
        home: Scaffold(
      appBar: AppBar(
        title: Text('Bonjour App'),
        backgroundColor: Color(0xFFB74093),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Center(
              child: Text(
                "Bonjour",
                style: TextStyle(
                    fontSize: 40,
                    color: Color(0xFFB74093),
                    fontWeight: FontWeight.bold),
              ),
            ),
            Center(
              child: Text(
                "Je suis Ross",
                style: TextStyle(fontSize: 40, color: Color(0xFFB74093)),
              ),
            ),
            Center(
              child: Image.network(
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMG50Tz5N-plr51nXwdG7NuL6jxVofpxpADQ&usqp=CAU',
                  height: 350),
            ),
            Center(child: BoutonContactezMoi())
          ],
        ),
      ),
    ));
  }
}

class BoutonContactezMoi extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO code du bouton "Contactez-moi" à compléter
    return ElevatedButton(
      child: Text(
        "Contactez Moi !",
      ),
      onPressed: () => showDialog(
          context: context,
          builder: (BuildContext context) {
            return AlertDialog(
              title: Text('Contactez-moi'),
              content: Text('Je suis joignable à l\'IMT Atlantique'),
            );
          }),
      style: ButtonStyle(
        backgroundColor: MaterialStateProperty.all<Color>(Color(0xFFB74093)),
      ),
    );
  }
}
