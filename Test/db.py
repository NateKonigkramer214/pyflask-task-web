from flask import Flask, render_template, request, redirect, session
import pyodbc

app = Flask(__name__)

# Set the secret key for session management (change this to a random string)
app.secret_key = "password123@123"

# Replace the connection string placeholders with the actual values
connection_string = (
    "Driver={ODBC Driver 17 for SQL Server};"
    "Server=tcp:nathan-sql-server.database.windows.net,1433;"
    "Database=nathan-test-server;"
    "Encrypt=True;"
    "TrustServerCertificate=False;"
    "Connection Timeout=30;"
    "Authentication=ActiveDirectoryPassword"
)

# Helper function to check user credentials against the database
def check_user_credentials(username, password):
    try:
        with pyodbc.connect(connection_string) as conn:
            cursor = conn.cursor()
            cursor.execute(
                "SELECT username FROM users WHERE username=? AND password=?",
                (username, password),
            )
            return cursor.fetchone() is not None
    except Exception as e:
        print("Error: ", e)
        return False

# Route for the login page
@app.route("/", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")

        if check_user_credentials(username, password):
            session["username"] = username
            return redirect("/dashboard")
        else:
            return render_template("login.html", error="Invalid username or password.")

    return render_template("login.html", error=None)

# Route for the dashboard page (requires authentication)
@app.route("/dashboard")
def dashboard():
    if "username" in session:
        return f"<h1>Welcome, {session['username']}!</h1>"
    else:
        return redirect("/")

# Route for the logout action
@app.route("/logout")
def logout():
    session.pop("username", None)
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)
