function logout(){
    localStorage.removeItem("token");
    alert("User Logged out successfully.");
    window.location.href = "login.html"
}