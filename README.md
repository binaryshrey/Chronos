# Chronos ![GitHub deployments](https://img.shields.io/github/deployments/binaryshrey/chronos/production?style=flat&logo=vercel&label=vercel)

A minimalistic kanban board app : project management and issue tracking for everyone - [View](https://chronos-inc.vercel.app/)

![Banner](https://raw.githubusercontent.com/binaryshrey/Chronos/main/chronos-product.png)

### Development setup

```
git clone https://github.com/binaryshrey/Chronos.git
cd Chronos
npm i
npm run start
```

#### Firebase configs
- Create a .env file for Firebase
```
REACT_APP_FIREBASE_API_KEY=**********
REACT_APP_FIREBASE_AUTHDOMAIN=**********.firebaseapp.com
REACT_APP_FIREBASE_PROJECTID=**********
REACT_APP_FIREBASE_STORAGE_BUCKET=**********.appspot.com
REACT_APP_FIREBASE_MESSAGESENDER_ID=**********
REACT_APP_FIREBASE_APPID=**********
REACT_APP_FIREBASE_MEASUREMENTID=**********
```

- Include Google & Github Auth under Firebase Authentication
- Include Firebase-Firestore with below prod db-rule:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read, create, update, delete: if request.auth != null;
    	
    }
  }
}
```


Development server runs at `http://localhost:3000`






