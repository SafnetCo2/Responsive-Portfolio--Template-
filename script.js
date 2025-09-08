// Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Chatbox
const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");

function addMessage(msg, sender) {
    const div = document.createElement("div");
    div.className = sender === "bot" ? "bot-msg" : "user-msg";
    div.textContent = msg;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
}

chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && chatInput.value.trim()) {
        const userMsg = chatInput.value.trim();
        addMessage(userMsg, "user");
        chatInput.value = "";

        // Simple bot responses
        setTimeout(() => {
            let reply = "I'm here to help!";
            if (userMsg.toLowerCase().includes("hello")) reply = "Hello! How can I assist you today?";
            if (userMsg.toLowerCase().includes("services")) reply = "I offer Web Development, UI/UX Design, and Consulting.";
            if (userMsg.toLowerCase().includes("contact")) reply = "You can reach out via the contact form below.";
            addMessage(reply, "bot");
        }, 600);
    }
});
