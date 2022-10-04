
export function walletAlertNotification(updatedWallet:number, amount:number) {

  let temp = `
    <div style="max-width: 700px;text-align: center;background: #f4f8fd; text-transform: uppercase;
     margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
     <h2 style="color: teal;">Welcome to Airtym2cAsh</h2>
      <div style="text-align:center ; color:black;">
        <h3>Description: Credit Alert</h3>
        <h3>Amount: N ${amount}</h3>
        <div>
            <h3>Available Balance</h3>
            <h3>N ${updatedWallet}</h3>
        </div>

      </div>
   </div>
      `;
  return temp;
}
