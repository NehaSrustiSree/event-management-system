import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './context/AuthContext'
import App from './App'
import './index.css'
async function main() {
  const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.gpxvy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
      await client.connect();
      console.log("Connected to MongoDB");

      const database = client.db('credentials');
      const collection = database.collection('credentials');

      const doc = { fullname: "Neha", Emailaddress: "nehaallam@gmail.com", password: "neha123", confirmpassword: "neha123" };
      const result = await collection.insertOne(doc);

      console.log(`New document inserted with _id: ${result.insertedId}`);
  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
)