

document.addEventListener("DOMContentLoaded", function() {



  const navLinks = document.querySelectorAll(".bottom-navbar .nav-link");
  const headerTitle = document.getElementById("header-title");
  const web3LoginButton = document.getElementById("web3-login-button");
  const container = document.querySelector(".top-navbar .container");

  let selectedIcon = document.querySelector(".bottom-navbar .nav-link.active i").className;
  let selectedTitle = document.querySelector(".bottom-navbar .nav-link.active span").textContent;

  headerTitle.innerHTML = `<i class="${selectedIcon}"></i> ${selectedTitle}`;


ethereum.on("accountsChanged", handleAccountChange);

  navLinks.forEach(function(link) {
link.addEventListener("click", function() {
navLinks.forEach(function(link) {
  link.classList.remove("active");
});
this.classList.add("active");
selectedIcon = this.querySelector("i").className;
selectedTitle = this.querySelector("span").textContent;
headerTitle.innerHTML = `<i class="${selectedIcon}"></i> ${selectedTitle}`;
});
});
//connect to wallet
function connectToWallet(address) {
    ethereum.request({ method: "eth_requestAccounts" })
      .then(function(accounts) {
        const connectedAddress = accounts[0];
        const truncatedAddress = connectedAddress.substring(0, 6) + "..." + connectedAddress.substring(connectedAddress.length - 4);
        web3LoginButton.style.display = "none"; // Hide the login button
        const walletAddressElement = document.createElement("span");
        walletAddressElement.style.fontWeight = "bold";
        walletAddressElement.innerHTML = truncatedAddress;
        const logoutButton = document.createElement("button");
        logoutButton.classList.add("web3-logout-button", "btn", "btn-primary");
        logoutButton.innerHTML = '<i class="fas fa-sign-out-alt"></i>';
        logoutButton.addEventListener("click", function() {
            web3LoginButton.style.display = "block"; // Show the login button
            const walletAddressContainer = document.querySelector(".web3-wallet-address");
            if (walletAddressContainer) {
              walletAddressContainer.remove(); // Remove the wallet address element and logout button
            }
            window.location.href = "connect.html";
          });
        // Check if wallet address container already exists
        const existingWalletAddressContainer = document.querySelector(".web3-wallet-address");
        if (existingWalletAddressContainer) {
          // Remove the existing wallet address container
          existingWalletAddressContainer.remove();
        }
  
        // Create a new wallet address container and add the elements
        const walletAddressContainer = document.createElement("div");
        walletAddressContainer.classList.add("web3-wallet-address");
        walletAddressContainer.appendChild(walletAddressElement);
        walletAddressContainer.appendChild(logoutButton);
        container.appendChild(walletAddressContainer);
      })
      .catch(function(error) {
        console.error("Error connecting to the wallet:", error);
      });
  
    console.log("Connected to wallet:", address);
  }

  web3LoginButton.addEventListener("click", function() {
    if (typeof ethereum !== "undefined") {
      ethereum.enable()
        .then(function(accounts) {
          const connectedAddress = accounts[0];
          const truncatedAddress = connectedAddress.substring(0, 6) + "..." + connectedAddress.substring(connectedAddress.length - 4);
          web3LoginButton.style.display = "none"; // Hide the login button
          const walletAddressElement = document.createElement("span");
          walletAddressElement.style.fontWeight = "bold";
          walletAddressElement.innerHTML = truncatedAddress;
          const logoutButton = document.createElement("button");
          logoutButton.classList.add("web3-logout-button", "btn", "btn-primary");
          logoutButton.innerHTML = '<i class="fas fa-sign-out-alt"></i>';
          logoutButton.addEventListener("click", function() {
            web3LoginButton.style.display = "block"; // Show the login button
            walletAddressContainer.style.display = "none"; // Hide the wallet address container
          });
          walletAddressContainer.style.display = "block"; // Show the wallet address container
          walletAddressContainer.innerHTML = ""; // Clear previous content
          walletAddressContainer.appendChild(walletAddressElement);
          walletAddressContainer.appendChild(logoutButton);
        })
        .catch(function(error) {
          console.error("Error connecting to the wallet:", error);
        });
    } else {
      console.error("Web3 provider is not available");
    }
  });

 // Function to handle account change
 function handleAccountChange(accounts) {
    if (accounts.length > 0) {
    connectToWallet(accounts)
    } else {
      window.location.href = "connect.html";
      // Show the login button and hide the wallet address
      web3LoginButton.style.display = "block";
      walletAddressContainer.style.display = "none";
    }
  }


// Check if MetaMask is connected
if (typeof ethereum !== "undefined") {
    ethereum.request({ method: "eth_accounts" })
      .then(function(accounts) {
        handleAccountChange(accounts);
        // Add event listener for account change
        ethereum.on("accountsChanged", handleAccountChange);
      })
      .catch(function(error) {
        console.error("Error checking account:", error);
      });
  } else {
    // MetaMask is not available
    web3LoginButton.style.display = "block";
    walletAddressContainer.style.display = "none";
  }
});

   document.onreadystatechange = function() {
    const loader = document.getElementById("loader");


    if (document.readyState === "complete") {
      loader.style.display = "none";
    } else {
      loader.style.display = "block";
    }
  };









  