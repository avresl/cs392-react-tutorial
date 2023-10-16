import { getDatabase, onValue, ref, update} from 'firebase/database';
import { useCallback, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCnZKoIgnbZ2n7g1o2u4d-JRWGIIsXF3Q0",
    authDomain: "cs392-react-tutorial-4a01a.firebaseapp.com",
    databaseURL: "https://cs392-react-tutorial-4a01a-default-rtdb.firebaseio.com",
    projectId: "cs392-react-tutorial-4a01a",
    storageBucket: "cs392-react-tutorial-4a01a.appspot.com",
    messagingSenderId: "258813529950",
    appId: "1:258813529950:web:679aeebae29a17e8a249cf",
    measurementId: "G-2M859SNGTS"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};