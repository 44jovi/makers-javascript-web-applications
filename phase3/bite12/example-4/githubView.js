class GithubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.api.getRepoInfo(repoName, repoData => {
        this.model.setRepoInfo(repoData);        
        this.display();
        console.log(repoData);
        console.log('button clicked - #submit-button')
      });
    });
  }

  display() {
    const repoData = this.model.getRepoInfo();
    
    const repoNameEl = document.querySelector('#repo-name');
    repoNameEl.append(repoData.full_name);

    const repoDescripEl = document.querySelector('#repo-description');
    repoDescripEl.append(repoData.description);

    document.getElementById("repo-profile-img").src = repoData.organization.avatar_url;
  }
}

module.exports = GithubView;