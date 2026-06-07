const { execSync } = require('child_process');

try {
  const token = execSync('gcloud auth print-access-token').toString().trim();
  const res = execSync(`curl -s -X POST -H "Authorization: Bearer ${token}" -H "Content-Type: application/json" -d "{\\"contents\\":[{\\"role\\":\\"user\\",\\"parts\\":[{\\"text\\":\\"hi\\"}]}]}" https://asia-southeast1-aiplatform.googleapis.com/v1/projects/project-5d7a4d26-5ea6-4e0a-864/locations/asia-southeast1/publishers/google/models/gemini-1.5-flash-001:generateContent`);
  console.log("Response:", res.toString());
} catch (e) {
  console.error(e.message);
}
