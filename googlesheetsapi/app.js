
const doSomethingAsync = async (googleSheetId) => {
    const { GoogleSpreadsheet } = require('google-spreadsheet');

// Initialize the sheet - doc ID is the long id in the sheets URL
    const doc = new GoogleSpreadsheet(googleSheetId);

    console.log("Loading Sheet: " + googleSheetId)
    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    });


    await doc.loadInfo(); // loads document properties and worksheets
    console.log(doc.title);
    /*
    await doc.updateProperties({ title: 'renamed doc' });

    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
    console.log(sheet.title);
    console.log(sheet.rowCount);

// adding / removing sheets
    const newSheet = await doc.addSheet({ title: 'hot new sheet!' });
    await newSheet.delete();

     */
}

doSomethingAsync('1aUhDk3y5sKEd15VpYZsXKN11vNjDetNyCLgSW7U_QqA');
