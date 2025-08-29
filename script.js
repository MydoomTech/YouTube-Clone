let balance = 0;
let records = [];

function addRecord() {
  const desc = document.getElementById("description").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const type = document.getElementById("type").value;

  if (!desc || isNaN(amount)) {
    alert("Please enter valid description and amount.");
    return;
  }

  const record = {
    description: desc,
    amount: amount,
    type: type,
    date: new Date().toLocaleString()
  };

  records.push(record);
  updateBalance();
  updateUI();

  // Clear inputs
  document.getElementById("description").value = "";
  document.getElementById("amount").value = "";
}

function updateBalance() {
  balance = 0;
  records.forEach(r => {
    if (r.type === "income") {
      balance += r.amount;
    } else {
      balance -= r.amount;
    }
  });
  document.getElementById("balance").textContent = `₹${balance.toFixed(2)}`;
}

function updateUI() {
  const list = document.getElementById("records-list");
  list.innerHTML = "";

  records.forEach(record => {
    const li = document.createElement("li");
    li.className = record.type === "expense" ? "expense" : "";
    li.textContent = `${record.description} - ₹${record.amount} (${record.date})`;
    list.appendChild(li);
  });
}

function exportData() {
  const data = JSON.stringify(records, null, 2);
  document.getElementById("exportedData").value = data;
}
