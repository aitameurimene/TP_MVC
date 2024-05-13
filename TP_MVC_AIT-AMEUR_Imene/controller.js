class ControleurTache {
    constructor(modele, vue) {
        this.modele = modele;
        this.vue = vue;

        this.vue.setGestionnaireAjout(this.ajouterTache.bind(this));
        this.afficherToutesLesTaches();
    }

    ajouterTache(description, categorie) {
        this.modele.ajouterTache(description, categorie);
        this.afficherToutesLesTaches();
    }

    afficherToutesLesTaches() {
        this.vue.afficher(this.modele.obtenirTaches());
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const controleur = new ControleurTache(ModeleTache.getInstance(), new VueTache());
});
