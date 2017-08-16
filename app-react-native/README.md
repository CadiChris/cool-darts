### Icônes
Pour générer les icônes de l'application : https://github.com/dwmkerr/app-icon  
Par contre le package est en `devDependencies` et pas en global, donc il faut utiliser `./node_modules/.bin/app-icon` pour l'exécuter.

### Releaser une nouvelle version
Le fichier `keystore.properties` qui contient nos infos confidentielles n'est pas commit.
Il doit être placé à la racine du projet android.  
`alkeya.keystore` doit être commit dans `android/app/`

Pour une nouvelle release :
`yarn release -- --code=3 --name=1.2` 
 - `code` est le code technique du Play Store.À incrémenter de 1.
 - `name` est le nom de la version. Utiliser une notation semver.
 - `yarn info-release` permet d'obtenir les code et name courants.
 
Cela va taguer le repo et générer l'apk pour le store. Le process d'upload sur le store est encore manuel.