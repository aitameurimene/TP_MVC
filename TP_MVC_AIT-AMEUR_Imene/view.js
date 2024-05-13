class TaskRenderer {
    constructor(tache) {
        if (this.constructor === TaskRenderer) {
            throw new Error("Cannot instantiate abstract class!");
        }
        this.tache = tache;
    }

    render() {
        throw new Error("Abstract method 'render' must be implemented.");
    }
}

class CategorizedTaskRenderer extends TaskRenderer {
    render() {
        const item = document.createElement('li');
        item.textContent = `${this.tache.description} [${this.tache.categorie}]`;
        item.style.backgroundColor = this.getCategoryColor(this.tache.categorie);
        return item;
    }

    getCategoryColor(categorie) {
        const colors = {
            "travail": "red",
            "maison": "blue",
            "divers": "green"
        };
        return colors[categorie] || "lightgrey";
    }
}

class VueTache {
    constructor() {
        this.app = document.getElementById('application');
        this.formulaire = document.getElementById('formulaireTache');
        this.saisie = document.getElementById('saisieTache');
        this.categorie = document.getElementById('categorieTache');
        this.liste = document.getElementById('listeTaches');

        this.formulaire.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.saisie.value && this.categorie.value) {
                this.ajouterTache(this.saisie.value, this.categorie.value);
                this.saisie.value = '';
            }
        });
    }

    setGestionnaireAjout(handler) {
        this.ajouterTache = handler;
    }

    afficher(taches) {
        this.liste.innerHTML = '';
        taches.forEach(tache => {
            const renderer = new CategorizedTaskRenderer(tache);
            this.liste.appendChild(renderer.render());
        });
    }
}
