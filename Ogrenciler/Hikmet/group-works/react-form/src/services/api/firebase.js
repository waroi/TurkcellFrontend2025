import { 
  collection, 
  addDoc, 
  deleteDoc, 
  doc, 
  getDoc, 
  getDocs,
  query,
  setDoc,
  where
} from "firebase/firestore";
import { db } from "../../firebase/config";

// Applications
const fetchApplicationsByCollection = async (collectionName) => {
  try {
    const snapshot = await getDocs(collection(db, collectionName));
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error(`Error fetching ${collectionName}:`, error);
    throw error;
  }
};

const addApplication = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
  } catch (error) {
    console.error(`Error adding doc to ${collectionName}:`, error);
    throw error;
  }
};

const moveApplication = async (application, fromCollection, toCollection) => {
  try {
    const { id, ...cleanApplication } = application;
    await addDoc(collection(db, toCollection), cleanApplication);
    await deleteDoc(doc(db, fromCollection, id));
    return true;
  } catch (error) {
    console.error(`Error moving application:`, error);
    throw error;
  }
};

// Jobs
const fetchAllJobs = async () => {
  try {
    const jobsCollection = collection(db, "jobs");
    const jobsSnapshot = await getDocs(jobsCollection);
    return jobsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw new Error("Failed to load job listings. Please try again later.");
  }
};

const fetchJobById = async (jobId) => {
  try {
    if (!jobId) {
      throw new Error("Job ID is required");
    }

    const jobDoc = doc(db, "jobs", jobId);
    const jobSnapshot = await getDoc(jobDoc);

    if (!jobSnapshot.exists()) {
      throw new Error(`No job found with ID: ${jobId}`);
    }

    return {
      id: jobSnapshot.id,
      ...jobSnapshot.data(),
    };
  } catch (error) {
    console.error("Error fetching job details:", error);
    throw error;
  }
};

// Quiz and Test Results
const fetchTestResults = async () => {
  try {
    const attemptsRef = collection(db, "test_attempts");
    const attemptsSnapshot = await getDocs(attemptsRef);

    if (attemptsSnapshot.empty) {
      return { passed: [], failed: [] };
    }

    const attempts = attemptsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const completedAttempts = attempts.filter(
      (attempt) => attempt.completed && attempt.attempted
    );

    const passed = completedAttempts.filter((attempt) => attempt.score >= 7);
    const failed = completedAttempts.filter((attempt) => attempt.score < 7);

    return { passed, failed };
  } catch (err) {
    console.error("Error fetching test results:", err);
    throw err;
  }
};

const fetchQuizQuestions = async () => {
  try {
    const questionsRef = collection(db, "questions");
    const questionSnapshot = await getDocs(questionsRef);
    return questionSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
};

const fetchQuizSettings = async () => {
  try {
    const settingsRef = doc(db, "quiz_settings", "default");
    const settingsSnap = await getDoc(settingsRef);
    
    if (settingsSnap.exists()) {
      return settingsSnap.data();
    }
    
    // Default settings if none found
    return {
      easyCount: 5,
      mediumCount: 3,
      hardCount: 2
    };
  } catch (error) {
    console.error("Error fetching quiz settings:", error);
    // Return default settings on error
    return {
      easyCount: 5,
      mediumCount: 3,
      hardCount: 2
    };
  }
};

const saveQuizResult = async (userId, email, score, totalQuestions) => {
  try {
    await addDoc(collection(db, "quiz_results"), {
      userId,
      email,
      score,
      totalQuestions,
      timestamp: new Date(),
    });

    const testStatusRef = doc(db, "test_attempts", userId);
    await setDoc(testStatusRef, {
      userId,
      email,
      attempted: true,
      completed: true,
      score,
      totalQuestions,
      timestamp: new Date(),
    });
    
    return true;
  } catch (error) {
    console.error("Error saving quiz result:", error);
    throw error;
  }
};

const checkUserTestEligibility = async (userEmail) => {
  try {
    const olumluQuery = query(
      collection(db, "olumlu"),
      where("email", "==", userEmail)
    );

    const olumluSnapshot = await getDocs(olumluQuery);

    if (olumluSnapshot.empty) {
      return { isEligible: false, message: "No test access found." };
    }

    const olumluData = olumluSnapshot.docs[0].data();
    
    if (!olumluData.isAccepted) {
      return { isEligible: false, message: "Test access not approved." };
    }
    
    return { isEligible: true, message: "" };
  } catch (error) {
    console.error("Error checking eligibility:", error);
    throw error;
  }
};

const getUserTestStatus = async (userId) => {
  try {
    const testStatusRef = doc(db, "test_attempts", userId);
    const testStatusSnap = await getDoc(testStatusRef);
    
    if (testStatusSnap.exists()) {
      return testStatusSnap.data();
    }
    
    return null;
  } catch (error) {
    console.error("Error getting test status:", error);
    throw error;
  }
};

const updateQuizSettings = async (settings) => {
  try {
    await setDoc(doc(db, "quiz_settings", "default"), settings);
    return true;
  } catch (error) {
    console.error("Error updating quiz settings:", error);
    throw error;
  }
};

export const firebaseApi = {
  applications: {
    fetchByCollection: fetchApplicationsByCollection,
    add: addApplication,
    move: moveApplication
  },
  jobs: {
    fetchAll: fetchAllJobs,
    fetchById: fetchJobById
  },
  quiz: {
    fetchQuestions: fetchQuizQuestions,
    fetchSettings: fetchQuizSettings,
    saveResult: saveQuizResult,
    checkEligibility: checkUserTestEligibility,
    getUserStatus: getUserTestStatus,
    updateSettings: updateQuizSettings
  },
  testResults: {
    fetch: fetchTestResults
  }
};
