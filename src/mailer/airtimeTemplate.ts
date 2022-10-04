export function airtimeNotification(amountTransfered:number, phoneNumber:number) {
    let temp = `
      <div style="max-width: 700px;text-align: center;background: #f4f8fd; text-transform: uppercase;
       margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
       <h2 style="color: teal;">Welcome to Airtym2cAsh</h2>
        <div style="text-align:center ; color:black;">
          <h3>Description:Airtime Credit Alert</h3>
          <h3>You have received N${amountTransfered}</h3>
          <div>
              <h2>FROM</h2>
              <h3>${phoneNumber}</h3>
          </div>
        </div>
     </div>
        `;
    return temp;
  }