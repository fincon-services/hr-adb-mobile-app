import RNFS from 'react-native-fs';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import AppToast from '../components/appToast/AppToast';

const generatePaySlipHTML = (empData: any) => {
  return `
  <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 12px;
        font-size: 12px;
        color: #333;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .logo {
        width: 80px;
      }
      .address {
        font-size: 10px;
        margin-top: 5px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 10px;
      }
      th, td {
        border: 1px solid #ddd;
        padding: 6px;
        text-align: left;
      }
      th {
        background-color: #fcf1df;
      }
      .tag {
        font-weight: bold;
      }
      .flex-row {
        display: flex;
        justify-content: space-between;
        margin-top: 12px;
      }
      .box {
        width: 48%;
      }
      .total {
        border: 1px solid #94a3b8;
        border-radius: 4px;
        padding: 6px;
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
      }
      .footer-note {
        font-size: 10px;
        margin-top: 15px;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <img src="https://i.ibb.co/5F6QHbG/logo.png" class="logo" />
      <div>
        <h3>Pay Slip</h3>
        <p>${empData?.PayMonth}</p>
      </div>
    </div>
    <p class="address">
      1st Floor, Block C, FTC Building, Shahrah-e-Faisal, Karachi Pakistan
    </p>

    <table>
      <tr>
        <th>Emp Code</th>
        <th>Emp Name</th>
        <th>CNIC</th>
        <th>Joining Date</th>
      </tr>
      <tr>
        <td>${empData?.employee_detail?.employee_no}</td>
        <td>${empData?.employee_detail?.name}</td>
        <td>${empData?.employee_detail?.cnic}</td>
        <td>${empData?.employee_detail?.date_of_joining}</td>
      </tr>
    </table>

    <div class="flex-row">
      <div class="box">
        <h4>Earnings</h4>
        ${empData?.salary_allownace_deduction
          ?.filter((i: any) => i?.Category == 1)
          ?.map(
            (i: any) => `
          <div class="total">
            <span class="tag">${i.Description}</span>
            <span>+ ${i.Value}</span>
          </div>
        `,
          )
          .join('')}
      </div>
      <div class="box">
        <h4>Deductions</h4>
        ${empData?.salary_allownace_deduction
          ?.filter((i: any) => i?.Category != 1)
          ?.map(
            (i: any) => `
          <div class="total">
            <span class="tag">${i.Description}</span>
            <span>- ${i.Value}</span>
          </div>
        `,
          )
          .join('')}
      </div>
    </div>

    <div class="flex-row">
      <div class="total">
        <span>Total Earnings</span>
        <span>${empData?.TotalEarnings ?? 0}</span>
      </div>
      <div class="total">
        <span>Total Deductions</span>
        <span>${empData?.TotalDeductions ?? 0}</span>
      </div>
    </div>

    <table>
      <tr>
        <th>Monthly Salary</th>
        <th>Net Pay</th>
        <th>Payment Mode</th>
        <th>Account No</th>
      </tr>
      <tr>
        <td>${empData?.MonthlySalary}</td>
        <td>${empData?.NetPay}</td>
        <td>${empData?.ModeOfPayment}</td>
        <td>${empData?.BankAccountNo}</td>
      </tr>
    </table>

    <p class="footer-note">
      Please intimate HR/Finance of any discrepancies instantly. This is a computer-generated slip; no signature required.
    </p>
  </body>
  </html>
  `;
};

export const generatePaySlipPDF = async (empData: any) => {
  //   try {
  //     const html = generatePaySlipHTML(empData);

  //     const options = {
  //       html,
  //       fileName: `payslip_${empData?.employee_detail?.employee_no}`,
  //       directory: 'Documents',
  //     };

  //     const file = await RNHTMLtoPDF.convert(options);
  //     console.log(file, 'ksfksdjfksdjfksdj');
  //     // ✅ Use your downloadFile util (ensure it handles local URIs properly)
  //     const pdfPath =
  //       Platform.OS === 'ios' ? file.filePath : `file://${file.filePath}`;

  //     await downloadFile(
  //       pdfPath,
  //       `payslip_${empData?.employee_detail?.employee_no}.pdf`,
  //     );
  //   } catch (err) {
  //     console.error('Error generating payslip PDF:', err);
  //   }

  try {
    const html = generatePaySlipHTML(empData);

    const options = {
      html,
      fileName: `payslip_${empData?.employee_detail?.employee_no}`,
      directory: 'Documents', // app’s Documents dir
    };

    const file = await RNHTMLtoPDF.convert(options);
    console.log('PDF created at:', file.filePath);

    const destPath = `${RNFS.DownloadDirectoryPath}/payslip_${empData?.employee_detail?.employee_no}.pdf`;

    // Move/copy to public downloads folder (Android)
    await RNFS.copyFile(file.filePath!, destPath);

    console.log('PDF saved to:', destPath);

    AppToast({ type: 'success', message: 'Payslip saved to download' });
  } catch (err) {
    console.error('Error generating payslip PDF:', err);
  }
};
