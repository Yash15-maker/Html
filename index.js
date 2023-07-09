document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var location = document.getElementById("location").value;
    var jobRole = document.getElementById("job-role").value;

    // Call a function to fetch candidates based on location and job role
    var candidates = fetchCandidates(location, jobRole);

    // Clear the existing candidate list
    var candidateList = document.getElementById("candidate-list");
    candidateList.innerHTML = "";

    // Display the fetched candidates
    candidates.forEach(function (candidate) {
      var listItem = document.createElement("li");
      listItem.classList.add("candidate-item");

      var nameHeading = document.createElement("h3");
      nameHeading.textContent = candidate.name;

      var locationPara = document.createElement("p");
      locationPara.textContent = "Location: " + candidate.location;

      var jobRolePara = document.createElement("p");
      jobRolePara.textContent = "Job Role: " + candidate.jobRole;

      listItem.appendChild(nameHeading);
      listItem.appendChild(locationPara);
      listItem.appendChild(jobRolePara);

      candidateList.appendChild(listItem);
    });
  });

function fetchCandidates(location, jobRole) {
  // Replace this with your own logic to fetch candidates from a database or API
  // You can use AJAX, Fetch API, or any other method to retrieve data

  // Sample data for demonstration
  var candidates = [
    { name: "Candidate 1", location: "Location 1", jobRole: "Role 1" },
    { name: "Candidate 2", location: "Location 2", jobRole: "Role 2" },
    { name: "Candidate 3", location: "Location 1", jobRole: "Role 3" },
    { name: "Candidate 4", location: "Location 3", jobRole: "Role 1" },
    { name: "Candidate 5", location: "Location 2", jobRole: "Role 2" },
  ];

  // Filter candidates based on location and job role
  var filteredCandidates = candidates.filter(function (candidate) {
    return candidate.location === location && candidate.jobRole === jobRole;
  });

  return filteredCandidates;
}
