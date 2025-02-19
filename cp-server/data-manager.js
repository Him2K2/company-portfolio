const axios = require("axios");
const XLSX = require("xlsx");

const fetchData = async (url) => {
  try {
    const response = await axios.get(url, { responseType: "arraybuffer" });
    const data = new Uint8Array(response.data);
    const workbook = XLSX.read(data, { type: "array" });

    // Chuyển toàn bộ các sheet thành object { sheetName: jsonData }
    const allSheetsData = workbook.SheetNames.reduce((acc, sheetName) => {
      const sheet = workbook.Sheets[sheetName];
      acc[sheetName] = XLSX.utils.sheet_to_json(sheet); // Chuyển thành JSON
      return acc;
    }, {});

    return allSheetsData;
  } catch (error) {
    console.error("Lỗi khi tải hoặc đọc file:", error);
  }
};
const excelUrl =
  "https://docs.google.com/spreadsheets/d/1oRJkMRKAAhgmepzRahS1mwXcXcG-EgdR/export?format=xlsx";
if (require.main === module) {
  fetchData(excelUrl)
    .then((data) => console.log("Dữ liệu từ Excel:", data))
    .catch((err) => console.error("Lỗi:", err.message));
}
const shipper = {data:data}
module.exports = {
  fetchData,
  shipper
};
