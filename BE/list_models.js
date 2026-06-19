const https = require('https');


const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("Lỗi: Không tìm thấy GEMINI_API_KEY trong biến môi trường!");
  process.exit(1);
}

https.get(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const json = JSON.parse(data);
    const models = json.models || [];
    console.log("Total models:", models.length);
    models.forEach(m => console.log(m.name, m.supportedGenerationMethods));
  });
}).on('error', (err) => console.log(err));