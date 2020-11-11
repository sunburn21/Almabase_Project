var inputOrg = document.getElementById("org");
var inputN = document.getElementById("n");
var inputM = document.getElementById("m");
var spinner = document.getElementById("spinner");

const onSubmit = (event) => {
  event.preventDefault();
  spinner.style.display = "block";
  var endpoint = `api/org/${inputOrg.value}/${inputN.value}/${inputM.value}`;
  var url = `${window.location.href}${endpoint}`;
  console.log(url);
  fetch(url, {
    method: "GET",
    headers: { "content-Type": "application/json" },
  })
    .then((response) => {
      if (response.status === 200) {
        response.json().then((data) => {
          console.log(data);
          spinner.style.display = "none";
          document.getElementById("heading").style.display = "block";
          document.getElementById("error").style.display = "none";
          document.getElementById("accordionRepo").innerHTML = getInnerHtml(
            data
          );
          inputOrg.value = "";
          inputM.value = "";
          inputN.value = "";
        });
      } else {
        spinner.style.display = "none";
        document.getElementById("error").style.display = "block";
        console.log("error");
      }
    })
    .catch((error) => console.log(error));
};

const getInnerHtml = (data) => {
  var html = "";
  data.map((repo) => {
    html += getProcessedHtml(repo);
  });
  return html;
};

const getProcessedHtml = (repo) => {
  var html = "";
  var repoName = repo.repo;
  var contributors = repo.contributors;
  var listhtml = "";
  contributors.map((contributor) => {
    listhtml += `<li class="list-group-item">
                     <a href="${contributor.url}">${contributor.name}</a>
                     <div>commits: ${contributor.commits}</div>
                 </li>`;
  });

  html = `<div class="card mt-2">
            <div class="card-header p-0" id="${repoName}0">
              <h2 class="mb-0 p-0">
                <button
                  class="btn btn-block btn-primary"
                  type="button"
                  data-toggle="collapse"
                  data-target="#${repoName}"
                  aria-expanded="false"
                  aria-controls="${repoName}">
                  ${repoName}
                </button>
              </h2>
            </div>

            <div
              id="${repoName}"
              class="collapse show"
              aria-labelledby="${repoName}0"
              data-parent="#accordionRepo">
              <div class="card-body">
                <ul class="list-group">
                  ${listhtml}
                </ul>
              </div>
            </div>
        </div>`;
  return html;
};
