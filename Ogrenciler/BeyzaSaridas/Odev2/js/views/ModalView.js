class ModalView {
   constructor() {
       this.modal = new bootstrap.Modal(document.getElementById('gameModal'));
       this.form = document.getElementById('gameForm');
       this.initializeFields();
   }

   initializeFields() {
       this.fields = {
           id: document.getElementById('gameId'),
           name: document.getElementById('gameName'),
           description: document.getElementById('gameDescription'),
           category: document.getElementById('gameCategory'),
           releaseDate: document.getElementById('gameReleaseDate'),
           image: document.getElementById('gameImage'),
           developer: document.getElementById('gameDeveloper'),
           steamUrl: document.getElementById('gameSteamUrl')
       };
   }

   show(game = null) {
       if (game) {
           this.fillForm(game);
       } else {
           this.clearForm();
       }
       this.modal.show();
   }
//modal kapanması için yani gizlemek 
   hide() {
       this.modal.hide();
   }

   fillForm(game) {
       Object.keys(this.fields).forEach(key => {
           this.fields[key].value = game[key] || '';
       });
   }

   clearForm() {
       Object.values(this.fields).forEach(field => {
           field.value = '';
       });
   }

   getFormData() {
       const data = {};
       Object.keys(this.fields).forEach(key => {
           data[key] = this.fields[key].value;
       });
       return data;
   }
}
