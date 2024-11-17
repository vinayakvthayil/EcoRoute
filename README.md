# EcoRoute 🚗🌿  
**AI-Powered Navigation Tool for Eco-Friendly and Efficient Travel**

EcoRoute is a mobile application that helps users optimize their driving routes for reduced environmental impact and better fuel efficiency. Built with React Native, Node.js, and MongoDB, this project leverages AI and mapping technologies to provide smart navigation solutions.

---

## Features 🌟
- **Route Optimization**: Suggests the most eco-friendly and efficient routes.
- **Interactive Map**: Seamless navigation using Google Maps integration.
- **Real-Time Updates**: Provides live traffic updates and recalibrates routes.
- **User-Friendly Interface**: Designed with an intuitive and visually appealing layout.

---

## Tech Stack 🛠️
### **Frontend**
- **React Native**: For cross-platform mobile development.
- **react-native-maps**: Interactive maps for the app.
  
### **Backend**
- **Node.js with Express.js**: RESTful APIs and backend logic.
  
### **Database**
- **MongoDB**: NoSQL database for efficient data storage.

### **Additional Libraries and Tools**
- **Axios**: HTTP client for API requests.
- **dotenv**: Manages environment variables securely.
- **Google Maps API**: Provides route optimization and navigation.

---

## Installation ⚙️
### Prerequisites
- Node.js and npm installed
- React Native CLI installed
- MongoDB set up locally or on a cloud service
- Android Studio and/or Xcode installed for testing

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/vinayakvthayil/EcoRoute/.git
   cd EcoRoute
   ```

2. **Set up the backend**:
   ```bash
   cd EcoRoute-backend
   npm install
   npm start
   ```

3. **Set up the frontend**:
   ```bash
   cd ../EcoRoute-frontend/EcoRouteApp
   npm install
   npx react-native run-android  # For Android
   ```

4. **Environment Variables**:
   Create a `.env` file in the backend and frontend directories with your configurations (e.g., MongoDB URI, Google Maps API Key).

---

## Usage 🚀
1. Launch the backend server:
   ```bash
   cd EcoRoute-backend
   npm start
   ```
2. Run the app on an Android emulator:
   ```bash
   npx react-native run-android
   ```
   OR
   ```bash
   npx react-native run-ios
   ```
---
## Contact 📬
For any questions or support, please reach out to:
- **Project Team**: Vaishnav Vishwanath, Vinayak V Thayil, Kishan P, Swaroop Haridas
