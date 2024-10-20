document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById("content");
    let transactions = [];
    let loans = [];
    let employeeID;

    document.getElementById("signupButton").addEventListener("click", showSignUpForm);
    document.getElementById("loginButton").addEventListener("click", showLoginForm);
    document.getElementById("logoutButton").addEventListener("click", logout);
    document.getElementById("homeButton").addEventListener("click", showHomePage);

    function showHomePage() {
        content.innerHTML = `
            <h2>Welcome to Bank Management System</h2>
            <button id="recordTransactionButton">Record a Transaction</button>
            <button id="applyLoanButton">Apply for Loan</button>
            <button id="customerRegistrationButton">Customer Registration</button>
            <button id="updateCustomerButton">Update Customer Details</button>
            <button id="transactionListButton">List of Transactions</button>
            <button id="loanListButton">List of Loans</button>
        `;

        document.getElementById("recordTransactionButton").addEventListener("click", showTransactionForm);
        document.getElementById("applyLoanButton").addEventListener("click", showLoanForm);
        document.getElementById("customerRegistrationButton").addEventListener("click", showCustomerRegistrationForm);
        document.getElementById("updateCustomerButton").addEventListener("click", showUpdateCustomerForm);
        document.getElementById("transactionListButton").addEventListener("click", showTransactionList);
        document.getElementById("loanListButton").addEventListener("click", showLoanList);

        document.getElementById("logoutButton").style.display = "inline-block";
        document.getElementById("signupButton").style.display = "none";
        document.getElementById("loginButton").style.display = "none";
        document.getElementById("homeButton").style.display = "none";
    }

    function showSignUpForm() {
        content.innerHTML = `
            <form id="signupForm">
                <h2>Sign Up</h2>
                <input type="text" id="firstName" placeholder="First Name" required>
                <input type="text" id="lastName" placeholder="Last Name" required>
                <input type="email" id="email" placeholder="Email" required>
                <input type="password" id="password" placeholder="Password" required>
                <input type="password" id="confirmPassword" placeholder="Confirm Password" required>
                <input type="text" id="address" placeholder="Address" required>
                <input type="text" id="contactNumber" placeholder="Contact Number" required>
                <button type="submit">Sign Up</button>
                <a href="#" id="signInLink">Already have an account? Please sign in.</a>
            </form>
        `;

        document.getElementById("signupForm").addEventListener("submit", function(e) {
            e.preventDefault();
            employeeID = generateEmployeeID();
            alert("Employee Registration successful. Your Employee ID is: " + employeeID);
            redirectToLogin();
        });

        document.getElementById("signInLink").addEventListener("click", showLoginForm);
    }

    function showLoginForm() {
        content.innerHTML = `
            <form id="loginForm">
                <h2>Login</h2>
                <input type="text" id="loginEmployeeID" value="${employeeID || ''}" placeholder="Employee ID" required>
                <input type="password" id="loginPassword" placeholder="Password" required>
                <button type="submit">Login</button>
                <a href="#" id="signUpLink">Don't have an account? Sign up.</a>
            </form>
        `;

        document.getElementById("loginForm").addEventListener("submit", function(e) {
            e.preventDefault();
            showHomePage();
        });

        document.getElementById("signUpLink").addEventListener("click", showSignUpForm);
    }

    function showCustomerRegistrationForm() {
        content.innerHTML = `
            <form id="customerRegistrationForm">
                <h2>Customer Registration</h2>
                <input type="text" id="customerSSN" placeholder="Customer SSN ID" required>
                <input type="text" id="customerName" placeholder="Customer Name" required>
                <input type="text" id="accountNumber" placeholder="Account Number" required>
                <input type="text" id="ifscCode" placeholder="IFSC Code" required>
                <input type="number" id="accountBalance" placeholder="Account Balance" required>
                <input type="text" id="aadhaarCard" placeholder="Aadhaar Card No." required>
                <input type="text" id="panCard" placeholder="PAN Card No." required>
                <input type="date" id="dob" placeholder="Date of Birth" required>
                <select id="gender" required>
                    <option value="" disabled selected>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <select id="maritalStatus" required>
                    <option value="" disabled selected>Marital Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                </select>
                <input type="email" id="customerEmail" placeholder="Email" required>
                <input type="text" id="customerAddress" placeholder="Address" required>
                <input type="text" id="customerContact" placeholder="Contact Number" required>
                <button type="submit">Register</button>
                <button id="backButton" class="back-button">Back</button>
            </form>
        `;

        document.getElementById("customerRegistrationForm").addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Customer Registration Successful.");
            document.getElementById("customerRegistrationForm").reset();
            redirectToHome();
        });

        document.getElementById("backButton").addEventListener("click", showHomePage);
    }

    function showTransactionForm() {
        content.innerHTML = `
            <form id="transactionForm">
                <h2>Record a Transaction</h2>
                <input type="text" id="transactionID" placeholder="Transaction ID" required>
                <input type="text" id="transactionCustomerSSN" placeholder="Customer SSN ID" required>
                <input type="text" id="transactionCustomerName" placeholder="Customer Name" required>
                <input type="text" id="transactionAccountID" placeholder="Account ID" required>
                <input type="text" id="transactionAadhaarCard" placeholder="Aadhaar Card No." required>
                <input type="text" id="transactionPanCard" placeholder="PAN Card No." required>
                <input type="text" id="transactionAddress" placeholder="Address" required>
                <input type="date" id="transactionDate" placeholder="Date" required>
                <input type="text" id="transactionContact" placeholder="Contact Number" required>
                <select id="transactionMode" required>
                    <option value="" disabled selected>Mode of Transaction</option>
                    <option value="Credit">Credit</option>
                    <option value="Debit">Debit</option>
                </select>
                <input type="number" id="transactionAmount" placeholder="Amount" required>
                <button type="submit">Record Transaction</button>
                <button class="back-button" id="transactionBackButton">Back</button>
            </form>
        `;

        document.getElementById("transactionForm").addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Transaction recorded successfully.");
            transactions.push({
                transactionID: document.getElementById("transactionID").value,
                customerSSN: document.getElementById("transactionCustomerSSN").value,
                customerName: document.getElementById("transactionCustomerName").value,
                accountID: document.getElementById("transactionAccountID").value,
                aadhaarCard: document.getElementById("transactionAadhaarCard").value,
                panCard: document.getElementById("transactionPanCard").value,
                address: document.getElementById("transactionAddress").value,
                date: document.getElementById("transactionDate").value,
                contact: document.getElementById("transactionContact").value,
                mode: document.getElementById("transactionMode").value,
                amount: document.getElementById("transactionAmount").value
            });
            document.getElementById("transactionForm").reset();
            redirectToHome();
        });

        document.getElementById("transactionBackButton").addEventListener("click", showHomePage);
    }

    function showLoanForm() {
        content.innerHTML = `
            <form id="loanForm">
                <h2>Apply for Loan</h2>
                <input type="text" id="loanCustomerSSN" placeholder="Customer SSN ID" required>
                <input type="text" id="loanCustomerName" placeholder="Customer Name" required>
                <input type="text" id="occupation" placeholder="Occupation" required>
                <input type="text" id="employerName" placeholder="Employer Name" required>
                <input type="text" id="employerAddress" placeholder="Employer Address" required>
                <input type="email" id="loanEmail" placeholder="Email" required>
                <input type="text" id="loanAddress" placeholder="Address" required>
                <select id="maritalStatusLoan" required>
                    <option value="" disabled selected>Marital Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                </select>
                <input type="text" id="loanContact" placeholder="Contact Number" required>
                <input type="number" id="loanAmount" placeholder="Loan Amount" required>
                <input type="number" id="loanDuration" placeholder="Loan Duration (months)" required>
                <button type="submit">Apply for Loan</button>
                <button class="back-button" id="loanBackButton">Back</button>
            </form>
        `;

        document.getElementById("loanForm").addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Loan application submitted successfully.");
            loans.push({
                customerSSN: document.getElementById("loanCustomerSSN").value,
                customerName: document.getElementById("loanCustomerName").value,
                occupation: document.getElementById("occupation").value,
                employerName: document.getElementById("employerName").value,
                employerAddress: document.getElementById("employerAddress").value,
                email: document.getElementById("loanEmail").value,
                address: document.getElementById("loanAddress").value,
                maritalStatus: document.getElementById("maritalStatusLoan").value,
                contact: document.getElementById("loanContact").value,
                amount: document.getElementById("loanAmount").value,
                duration: document.getElementById("loanDuration").value
            });
            document.getElementById("loanForm").reset();
            redirectToHome();
        });

        document.getElementById("loanBackButton").addEventListener("click", showHomePage);
    }

    function showTransactionList() {
        content.innerHTML = `
            <h2>List of Transactions</h2>
            <ul id="transactionList"></ul>
            <button class="back-button" id="transactionListBackButton">Back</button>
        `;
        const transactionList = document.getElementById("transactionList");
        transactions.forEach((transaction, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${transaction.transactionID} - ${transaction.customerName} - ${transaction.amount}`;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function() {
                if (confirm("Are you sure you want to delete this transaction?")) {
                    transactions.splice(index, 1);
                    showTransactionList();
                }
            });
            listItem.appendChild(deleteButton);
            transactionList.appendChild(listItem);
        });
        document.getElementById("transactionListBackButton").addEventListener("click", showHomePage);
    }

    function showLoanList() {
        content.innerHTML = `
            <h2>List of Loans</h2>
            <ul id="loanList"></ul>
            <button class="back-button" id="loanListBackButton">Back</button>
        `;
        const loanList = document.getElementById("loanList");
        loans.forEach((loan, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${loan.customerName} - ${loan.amount}`;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function() {
                if (confirm("Are you sure you want to delete this loan application?")) {
                    loans.splice(index, 1);
                    showLoanList();
                }
            });
            listItem.appendChild(deleteButton);
            loanList.appendChild(listItem);
        });
        document.getElementById("loanListBackButton").addEventListener("click", showHomePage);
    }

    function showUpdateCustomerForm() {
        
        content.innerHTML = `
            <form id="updateCustomerForm">
                <h2>Update Customer Details</h2>
                <input type="text" id="updateCustomerSSN" placeholder="Customer SSN ID" required>
                <input type="text" id="updateCustomerName" placeholder="Customer Name" required>
                <input type="text" id="updateCustomerAccountID" placeholder="Account ID" required>
                <input type="text" id="updateCustomerAddress" placeholder="Address" required>
                <input type="text" id="updateCustomerContactNumber" placeholder="Contact Number" required>
                <button type="submit">Update</button>
                <button id="backButton" class="back-button">Back</button>
            </form>
        `
        document.getElementById("backButton").addEventListener("click", showHomePage);
    }

    

    function redirectToHome() {
        showHomePage();
    }

    function redirectToLogin() {
        showLoginForm();
    }

    function generateEmployeeID() {
        return Math.floor(Math.random() * 10000).toString(); // Random 4-digit employee ID
    }
    
let isLoggedIn = false; 

// Function to update the nav bar based on login state
function updateNavBar() {
    const loginButton = document.getElementById('loginButton');
    const logoutButton = document.getElementById('logoutButton');

    if (isLoggedIn) {
        loginButton.style.display = 'none'; 
        logoutButton.style.display = 'inline'; 
    } else {
        loginButton.style.display = 'inline'; 
        logoutButton.style.display = 'none'; 
    }
}

// Call this function when the user logs in
function login() {
    isLoggedIn = true;
    updateNavBar();
    // Redirect to the home page or other actions
}

// Call this function when the user logs out
function logout() {
    isLoggedIn = false;
    updateNavBar();
    // Redirect to the login page
    window.location.href = 'index.html'; 
}


document.addEventListener('DOMContentLoaded', updateNavBar);

});
