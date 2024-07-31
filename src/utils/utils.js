import { db } from '../components/Firebase';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  where
} from 'firebase/firestore';

export const tasks = [
    { Id: 'Create Wireframe', Status: 'Close', Summary: 'Create wireframe for the Chronos Mobile app', Type: 'Story', Priority: 'Low', Tags: 'Create', Estimate: '3.5', Assignee: 'Chronos', RankId: 1 },
    { Id: 'Design UI', Status: 'Close', Summary: 'Design user interface for Chronos Mobile app based on wireframes', Type: 'Story', Priority: 'Medium', Tags: 'Design', Estimate: '5.0', Assignee: 'Design Team', RankId: 2 },
    { Id: 'Develop Authentication', Status: 'Close', Summary: 'Develop user authentication and authorization features', Type: 'Task', Priority: 'High', Tags: 'Development', Estimate: '7.0', Assignee: 'Dev Team', RankId: 3 },
    { Id: 'API Integration', Status: 'Close', Summary: 'Integrate necessary APIs for data fetching and user interactions', Type: 'Task', Priority: 'High', Tags: 'Integration', Estimate: '6.0', Assignee: 'Dev Team', RankId: 4 },
    { Id: 'Setup Database', Status: 'InReview', Summary: 'Set up and configure the database for storing user data and app content', Type: 'Task', Priority: 'High', Tags: 'Database', Estimate: '4.0', Assignee: 'Dev Team', RankId: 5 },
    { Id: 'Implement Notification System', Status: 'InReview', Summary: 'Develop a system for sending notifications to users', Type: 'Task', Priority: 'Medium', Tags: 'Development', Estimate: '5.0', Assignee: 'Dev Team', RankId: 6 },
    { Id: 'UI/UX Testing', Status: 'InProgress', Summary: 'Test the user interface and user experience for usability issues', Type: 'Task', Priority: 'Medium', Tags: 'Testing', Estimate: '5.0', Assignee: 'QA Team', RankId: 7 },
    { Id: 'Bug Fixes', Status: 'InProgress', Summary: 'Fix bugs identified during testing phases', Type: 'Task', Priority: 'High', Tags: 'Bug Fix', Estimate: '6.0', Assignee: 'Dev Team', RankId: 8 },
    { Id: 'Prepare Deployment', Status: 'InProgress', Summary: 'Prepare the app for deployment, including app store submission', Type: 'Task', Priority: 'Medium', Tags: 'Deployment', Estimate: '4.0', Assignee: 'Dev Team', RankId: 9 },
    { Id: 'Marketing Strategy', Status: 'Open', Summary: 'Develop and implement a marketing strategy for the app launch', Type: 'Story', Priority: 'Medium', Tags: 'Marketing', Estimate: '5.0', Assignee: 'Marketing Team', RankId: 10 },
    { Id: 'Create User Documentation', Status: 'Open', Summary: 'Create user documentation and help guides', Type: 'Story', Priority: 'Low', Tags: 'Documentation', Estimate: '3.0', Assignee: 'Content Team', RankId: 11 },
    { Id: 'Monitor Post-Launch Performance', Status: 'Open', Summary: 'Monitor app performance and user feedback post-launch', Type: 'Task', Priority: 'Medium', Tags: 'Monitoring', Estimate: '3.0', Assignee: 'Support Team', RankId: 12 },
  ];


export const saveUserDataIfNewUser = async (user) => {

    try{
        const collection_ref = collection(db, 'users')
        const querySnapshot = query(collection_ref, where("email", "==", user.email))
        const doc_refs = await getDocs(querySnapshot);
        const res = []
        doc_refs.forEach(user => {
            res.push({
                id: user.id, 
                ...user.data()
            })
        })

        if(res.length === 0){
        await addDoc(collection(db, 'users'), {
            displayName : user.displayName,
            email: user.email,
            uid: user.uid,
            phoneNumber : user.phoneNumber,
            photoURL : user.photoURL,
            onboarded : false,
            tasks: tasks,
        }, { merge: true });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        else{
          localStorage.setItem('tasks', JSON.stringify(res[0].tasks));
        }
    }
    catch (error) {
      console.error('Error saving user data:', error);
    }
  };


export const queryTasks = async (user) => {

    try{
        const email = JSON.parse(localStorage.getItem('email'));
        
        const collection_ref = collection(db, 'users')
        const querySnapshot = query(collection_ref, where("email", "==", email))
        const doc_refs = await getDocs(querySnapshot);
        const res = []

        doc_refs.forEach(task => {
            res.push({
                ...task.data()
            })
        })
        
        if(res.length !== 0){
            localStorage.setItem('tasks', JSON.stringify(res[0].tasks));
            return res[0].tasks
        }

        
    }
    catch (error) {
      console.error('Tasks data:', error);
    }
  }; 







export const getDocumentIDsAndUpdate = async (newTasks) => {
  const colRef = collection(db, 'users');
  const email = JSON.parse(localStorage.getItem('email'));
  let docID = "";

  try {
    // Get all documents in the collection
    const snapshot = await getDocs(colRef);
    snapshot.forEach((doc) => {
      if (doc.data().email === email) {
        docID = doc.id;
        console.log(docID);
      }
    });

    if (docID) {
      // Reference the document
      const docRef = doc(db, 'users', docID);

      // Update the field with the array of objects
      await updateDoc(docRef, {
        tasks: newTasks
      });

      console.log('Document successfully updated!');
    } else {
      console.error('No document found with the provided email.');
    }
  } catch (error) {
    console.error('Error getting or updating documents: ', error);
  }
};