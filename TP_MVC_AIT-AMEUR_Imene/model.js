class Tache {
  constructor(description, categorie) {
      this.id = Math.random().toString(36).substr(2, 9);
      this.description = description;
      this.categorie = categorie;
  }
}

class ModeleTache {
  constructor() {
      if (ModeleTache.instance) {
          return ModeleTache.instance;
      }
      this.taches = [];
      ModeleTache.instance = this;
  }

  ajouterTache(description, categorie) {
      const tache = new Tache(description, categorie);
      this.taches.push(tache);
  }

  obtenirTaches() {
      return this.taches;
  }

  static getInstance() {
      if (!ModeleTache.instance) {
          ModeleTache.instance = new ModeleTache();
      }
      return ModeleTache.instance;
  }
}
