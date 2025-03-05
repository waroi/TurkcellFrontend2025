export default async function api(token,URL,myMethod) {
    const userObject = await fetch(URL, {
      method: myMethod,
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    
    if (userObject.ok) {
        const userData = await userObject.json();
        return userData;
    } else {
        throw new Error(userObject.status);
    }
}