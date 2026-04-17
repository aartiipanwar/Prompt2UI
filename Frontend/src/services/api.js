export const generateUI = async (prompt) => {
    const res = await fetch("http://localhost:3000/api/generate-ui", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
  
    const data = await res.json();
    return data.code;
  };