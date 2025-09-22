# TP3-Batman-JeremieRicard

Dossier ultra-confidentiel sur Batman, hébergé dans son propre Bat-ordinateur.

**URL du site** : https://jrcard.github.io/TP3-Batman-JeremieRicard/  
**URL du projet sur GitHub** : https://github.com/JRcard/TP3-Batman-JeremieRicard.git

## Animations

J'ai utilisé plusieurs types d'animations.

Tout d'abord, dans la présentation, j'ai intégré une animation GSAP de texte de type machine à écrire.  
**URL du plugin** : https://gsap.com/docs/v3/Plugins/TextPlugin  
J'ai repris le code à cet endroit et je l'ai extrapolé pour chaque ligne nécessaire. Le tout a été intégré dans une timeline.

Un autre endroit où GSAP m'a été utile est la section Entrée #002 de la page d'accueil.  
J'ai utilisé ScrollTrigger pour déclencher le ScrambleTextPlugin sur les mots "Analyse en cours...", donnant l'effet que le système est en recherche.

Une autre animation provient d'un code trouvé sur Codepen :  
https://codepen.io/leonam-silva-de-souza/pen/XJbYJPK  
Elle combine trois animations :

-   Une ligne de temps animée en CSS avec `@keyframes`
-   Une transition d'image (petite vers grande) gérée par des transitions dans le fichier `carousel.js`
-   Une animation de texte en CSS avec `@keyframes`

J'ai personnalisé les boutons selon mon esthétique et ajouté un bouton pause pour permettre la lecture.

À la fin de la page `arsenal.html`, j'ai ajouté un effet glitch sur un bouton menant à la page suivante.  
Ce style a été inspiré par une vidéo de Louis-Nicolas sur Believemy :  
https://youtu.be/GrUnDodON20?si=IRaewuZIeEkcdbDR  
Petit fait divers : c’est grâce à ses cours sur Udemy que j’ai approfondi mes connaissances en JavaScript.

## Composants Tailwind

Sur la page `arsenal.html`, dans la section des véhicules, se trouvent deux composants Tailwind.

Les cartes sont basées sur ce modèle :  
https://www.hyperui.dev/components/marketing/cards?codeType=html&isRtl=false&previewWidth=100%25#component-5

Pour styliser la version mobile du site, j’ai utilisé ce code :  
https://tailwindcss.com/plus/ui-blocks/application-ui/overlays/modal-dialogs

C’est là que les choses se compliquent. Je n’ai pas vérifié ce code au moment de l’implémenter, et il provoque des erreurs de validation HTML à cause des attributs `command` et `commandFor`, qui ne sont pas reconnus. En essayant de les remplacer par des `data-*`, le modal ne fonctionne plus.

Autre problème : pour que la carte puisse activer le modal, elle devait absolument être placée dans un élément `<button>`. Or, un élément `<div>` ne peut pas être un enfant direct d’un `<button>`. Je suis donc coincé.

J’ai choisi de laisser le tout tel quel. Premièrement, le délai de remise est trop court pour tout corriger. Deuxièmement, je considère que le problème ne vient pas d’un manque de rigueur de ma part, mais d’un manque de prudence dans le composant proposé par Tailwind Plus.

C’est là que je commence et termine mon éditorial en disant :  
**"Vive mes codes !"**

## Formulaire de double vérification

Le troisième composant est un formulaire de double vérification, pratiquement un copier-coller de :  
https://tailwindcss.com/plus/ui-blocks/application-ui/forms/form-layouts

J’ai conservé uniquement les parties qui m’intéressaient. Par curiosité, j’ai passé ce code dans le validateur HTML, et il contient aussi des erreurs. Heureusement, je n’ai pas utilisé les champs concernés par ces erreurs.
