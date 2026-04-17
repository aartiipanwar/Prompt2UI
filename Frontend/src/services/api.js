export const generateUI = async (prompt) => {
    const res = await fetch(" https://prompt2ui-auqi.onrender.com/api/generate-ui", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
  
    const data = await res.json();
    return data.code;
  };
