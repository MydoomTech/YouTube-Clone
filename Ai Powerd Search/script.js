async function searchAI() {
  const query = document.getElementById("searchInput").value;
  const resultsDiv = document.getElementById("results");

  if (!query) {
    resultsDiv.innerHTML = "Please enter a query.";
    return;
  }

  resultsDiv.innerHTML = "⏳ Searching...";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "thread_EIpHrTAVe0OzoLQg3TXfvrkG"  // 🔑 put your key here
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: query }]
      })
    });

    const data = await response.json();
    resultsDiv.innerHTML = data.choices[0].message.content;
  } catch (error) {
    resultsDiv.innerHTML = "❌ Error: " + error.message;
  }
}
