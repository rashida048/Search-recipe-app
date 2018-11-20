export default class Likes {
  constructor() {
    this.likes = [];
  }

  addLike(id, title, author, img) {
    const like ={ id, title, author, img };
    this.likes.push(like);

    // Persist data in localstorage
    this.persistData();

    return like;
  }

  deleteLike(id) {
    const index = this.likes.findIndex(el => el.id === id);
    this.likes.splice(index, 1);

    // Persist data in localstorage
    this.persistData();
  }

  isLiked(id) {
    return this.likes.findIndex(el => el.id === id) !== -1;
  }

  getNumLikes() {
    return this.likes.length;
  }

  persistData() {
    localStorage.setItem('likes', JSON.stringify(this.likes));
  }

  readStorage() {
    const storage = JSON.parse(localStorage.getItem('likes'));

    // Restoring likes from the localStorage
    if (storage) this.likes = storage;    
  }
}

/*
var tempObj = [];
for ( for i = 0; i < wholetable.length; i++){
tempObj[i] = {Date/Time: "", Type: "", Details: "", Location: ""};
tempObj[i].Date/Time = wholetable[i].cells[1].innerText;
tempObj[i].Type = wholetable[i].cells[2].innerText;
tempObj[i].Details = wholetable[i].cells[3].innerText;
tempObj[i].Location = wholetable[i].cells[4].innerText;
}
*/
