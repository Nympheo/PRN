import React from 'react';



class DataEntry extends React.Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
    this.checkForm = this.checkForm.bind(this);
  }

  sendData() {
    if(this.checkForm(date.value,quantity.value,mans.value,womens.value,adults.value,
        childrens.value,disease.value,nodisease.value,invalids.value,veterans.value,)){

          let dataSend = {
                          user: this.props.user,
                          toBase: {
                                  date: date.value,
                                  data: {
                                    count: quantity.value,
                                    mens: mans.value,
                                    womans: womens.value,
                                    adults: adults.value,
                                    children: childrens.value,
                                    disease: disease.value,
                                    nodisease: nodisease.value,
                                    invalids: invalids.value,
                                    veterans: veterans.value,
                                    doctors: 0
                                  }
                                }
                         };

          let xhr = new XMLHttpRequest();
          xhr.open("POST", "/enterData", true);
          xhr.setRequestHeader("Content-type", "application/json");
          xhr.onreadystatechange = function () {
              if (xhr.readyState === 4 && xhr.status === 200) {
                  alert(xhr.responseText);
              }
          };
          dataSend = JSON.stringify(dataSend);
          xhr.send(dataSend);
        }

        date.value = '';
        quantity.value = '';
        mans.value = '';
        womens.value = '';
        adults.value = '';
        childrens.value = '';
        disease.value = '';
        nodisease.value = '';
        invalids.value = '';
        veterans.value = '';
  }

  checkForm(date,quantity,mans,womens,adults,childrens,disease,nodisease,invalids,veterans) {
      let checkNum = /^\d{1,4}$/;
      if(!quantity.match(checkNum)||!mans.match(checkNum)||!womens.match(checkNum)||
    !adults.match(checkNum)||!childrens.match(checkNum)||!disease.match(checkNum)||
  !nodisease.match(checkNum)||!invalids.match(checkNum)||!veterans.match(checkNum))
        {
          alert(`Пожалуйста ведите целое число длиной до 4 символов`);
          return false;
        }
      let checkDate = /^\d{4}\,\d{1,2}$/;
      if(!date.match(checkDate))
        {
          alert('Пожалуйста ведите дату в формате гггг,мм');
          return false;
        }
      return true;
  }

  render() {
    return (
      <div className='statisticsEntry'>
        <h5>Внести отчётность</h5>
        <table>
          <tbody>
          	<tr>
              <td><label htmlFor="date">Дата(год,месяц):</label></td>
              <td><input type="text" id="date" placeholder="например: 2018,3" name="name"></input></td>
          	</tr>
          	<tr>
          		<td><label htmlFor="quantity">кол-во пациентов:</label></td>
          		<td><input type="text" id="quantity" name="name"></input></td>
          	</tr>
            <tr>
          		<td><label htmlFor="mans">мужчин:</label></td>
          		<td><input type="text" id="mans" name="name"></input></td>
          	</tr>
            <tr>
              <td><label htmlFor="womens">женщин:</label></td>
              <td><input type="text" id="womens" name="name"></input></td>
            </tr>
            <tr>
              <td><label htmlFor="adults">взрослых:</label></td>
              <td><input type="text" id="adults" name="name"></input></td>
            </tr>
            <tr>
              <td><label htmlFor="childrens">детей:</label></td>
              <td><input type="text" id="childrens" name="name"></input></td>
            </tr>
            <tr>
              <td><label htmlFor="disease">по болезни:</label></td>
              <td><input type="text" id="disease" name="name"></input></td>
            </tr>
            <tr>
              <td><label htmlFor="nodisease">осмотр:</label></td>
              <td><input type="text" id="nodisease" name="name"></input></td>
            </tr>
            <tr>
              <td><label htmlFor="invalids">инвалидов:</label></td>
              <td><input type="text" id="invalids" name="name"></input></td>
            </tr>
            <tr>
              <td><label htmlFor="veterans">ветеранов:</label></td>
              <td><input type="text" id="veterans" name="name"></input></td>
            </tr>
          </tbody>
        </table>
        <button onClick={this.sendData}><img src='/img/enter.png'/>ввод</button>
      </div>
    )
  }
}

export default DataEntry;
