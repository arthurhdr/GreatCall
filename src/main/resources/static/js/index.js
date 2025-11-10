function loadAndDisplayUsers() {
    const userListElement = document.getElementById("userList");

    if (userListElement) {
        userListElement.innerHTML = "Loading...";
        fetch('http://localhost:8080/api/v1/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Not authenticated');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                displayUsers(data, userListElement);
            })
            .catch((error) => {
                console.error('Error loading users:', error);
            });
    }
}

function displayUsers(userList, userListElement) {
    userListElement.innerHTML = "";

    if (userList.length === 0) {
        userListElement.innerHTML = '<li style="text-align: center; color: #666;">No users online</li>';
        return;
    }

    userList.forEach(user => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div class="user-info">
                <i class="fas fa-user-circle" style="color: #2c5aa0; font-size: 1.2rem;"></i>
                <div>
                    <strong>${user.username}</strong>
                    <div style="font-size: 0.9rem; color: #666;">${user.email}</div>
                </div>
            </div>
            <div class="user-status ${user.status === "online" ? "online" : "offline"}"></div>
        `;
        userListElement.appendChild(listItem);
    });
}

window.addEventListener("load", loadAndDisplayUsers);

function handleLogout() {
    // Use Spring Security's logout endpoint
    window.location.href = "/logout";
}

const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", handleLogout);
}

function handleNewMeeting() {
    const username = "User"; // This would come from your user system
    window.open(`videocall.html?username=${username}`, "_blank");
}

const newMeetingBtn = document.getElementById("newMeetingBtn");
if (newMeetingBtn) {
    newMeetingBtn.addEventListener("click", handleNewMeeting);
}

function handleJoinMeeting() {
    const roomId = document.getElementById("meetingName").value;
    const username = "User"; // This would come from your user system

    if (!roomId) {
        alert("Please enter a meeting ID");
        return;
    }

    const url = `videocall.html?roomID=${roomId}&username=${username}`;
    window.open(url, "_blank");
}

const joinMeetingBtn = document.getElementById("joinMeetingBtn");
if (joinMeetingBtn) {
    joinMeetingBtn.addEventListener("click", handleJoinMeeting);
}