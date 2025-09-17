// Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
// ================= Chatbox Script =================
const chatbox = document.getElementById("chatbox");
const chatToggle = document.getElementById("chat-toggle");
const chatClose = document.getElementById("chat-close");
const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");

// Toggle open
chatToggle.addEventListener("click", () => {
    chatbox.style.display = "flex";
    chatToggle.style.display = "none"; // hide toggle button when open
});

// Toggle close
chatClose.addEventListener("click", () => {
    chatbox.style.display = "none";
    chatToggle.style.display = "block"; // show toggle button again
});

// Function to add messages
function addMessage(msg, sender) {
    const div = document.createElement("div");
    div.className = sender === "bot" ? "bot-msg" : "user-msg";
    div.textContent = msg;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Listen for Enter key
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
