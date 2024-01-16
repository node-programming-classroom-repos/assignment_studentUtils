# Instruktioner

Utveckla ett nodejs-program med javascript som analyserar en uppsättning studentbetyg och rapporterar olika statistik baserade på den datan.
Programmet ska demonstrera kunskaper i funktioner, selektion och arrayhantering.
Detta betyder att du måste skapa funktioner, använda loopar och selektion (t ex if, else och/eller t ex switch etc).
Skriv kommenterer i din källkod som dokumenterar/berättar vad och hur du gjort.
När du är färdig lämnar du in din lösning här som en zip-fil - inkludera den källkod du har skrivit samt testet (inget annat).

Använd medföljande test (studentUtils.test.js).
För att använda testet;

- ladda ner filerna för uppgiften (eller t ex klona det här repot)
- installera **jest** i terminalen med kommandot **npm install --save-dev jest**
- se till att din fil package.json innehåller;

```
    "scripts": {
      "test": "jest"
      }
```

så här skulle din package.json alltså kunna se ut;


```
    {
      "dependencies": {
        "jest": "^29.7.0"
      },
      "scripts": {
        "test": "jest"
      }
  }
```

- nu kan du köra testet med kommandot via terminalen i samma mapp: **npm test**



# Krav

- Du får inte installera moduler eller använda externa sådana i din lösning.
- Du ska bara inkludera den källkod du har skrivit samt testfilen i din inlämning - inkludera inte lokala mappar såsom "node_modules".
- Man måste använd medföljande testfil **studentUtils.test.js**. Vid bedömning kommer testerna och testdatat i den användas.
- Du ska skapa en fil som ska döpas till **studentUtils.js** som ska innehålla 3st funktioner: 

**calculateAverageGrade(students), identifyTopStudents(students, threshold), sortStudentsByGrade(students)**.


**calculateAverageGrade(students)**
    
    ska beräkna genomsnittsbetyg och returnerar det genomsnittliga betyget för alla studenter.
    Inparametern ska vara array med test-data från testfilen (studentResults).

**identifyTopStudents(students, threshold)**

    funktionen går igenom arrayen (parameter students) och använder if-satser för att identifiera studenter med betyg över ett visst tröskelvärde (parameter threshold, som har t.ex. värdet 90) och skriver ut deras namn och betyg.

**sortStudentsByGrade(students)**

    funktionen ska sortera studenterna (parameter students) baserat på deras betyg i fallande ordning och skriver ut den sorterade listan.

