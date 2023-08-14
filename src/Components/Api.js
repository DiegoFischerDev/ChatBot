const ask = () => {
  setSending(true);
  //fetch('http://localhost:5001/api/ask', {
  fetch('https://apibotlegal.arsenaltecnologia.com.br/api/ask', {
    method: 'POST',
    body: JSON.stringify({ question: question }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(result => result.json().then(jsonResult => {
    setChatHistory([...chatHistory, ...jsonResult.chat_history]);
    setQuestion("");
    setSending(false);
  }));
}