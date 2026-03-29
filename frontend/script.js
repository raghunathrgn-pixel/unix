const API = "http://localhost:5000";

async function add() {
    const type = document.getElementById("type").value;
    const amount = document.getElementById("amount").value;

    await fetch(API + "/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, amount })
    });

    load();
}

async function load() {
    const res = await fetch(API + "/all");
    const data = await res.json();

    const list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach(d => {
        const li = document.createElement("li");
        li.innerText = `${d.type} - ${d.amount}`;
        list.appendChild(li);
    });

    const balRes = await fetch(API + "/balance");
    const bal = await balRes.json();
    document.getElementById("bal").innerText = bal.balance;
}

load();
