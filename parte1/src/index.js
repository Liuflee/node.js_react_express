import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',

  greet: function() {
    console.log('hello, my name is ' + this.name);
    return 'hello, my name is ' + this.name;
  },

  changeEducation: function(newEducation) {
    this.education = newEducation;
  }
}

arto.walk = () => {
  console.log('walking like a boss');
}

arto.growOlder = function() {
  this.age += 1;
}


const App = () => {
  console.log(arto.age);   // 35 es impreso
  arto.growOlder();
  console.log(arto.age);   // 36 es impreso
  arto.greet();
  arto.walk();        
  arto.changeEducation('MSc EE');
  console.log(arto.education);  // MSc EE es impreso 
  
  return (
    <div>
      <h1>Greetings Arto</h1>
      <p>{arto.greet()} my education is {arto.education} </p>
      <p> </p>
    </div>
  )

}

root.render(<App />);
