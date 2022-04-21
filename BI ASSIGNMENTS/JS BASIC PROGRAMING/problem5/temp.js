function temperatureConverter() {
    let valNum = prompt("Please enter temperature:");
    valNum = parseFloat(valNum);
    let fat=(valNum*1.8)+32;
    let temp=fat.toFixed(2)
    document.getElementById("temp").innerHTML=`Temparture in fahrenheit is ${temp}`
  }
  temperatureConverter()