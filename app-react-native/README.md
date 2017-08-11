### Icônes
Pour générer les icônes de l'application : https://github.com/dwmkerr/app-icon  
Par contre le package est en `devDependencies` et pas en global, donc il faut utiliser `./node_modules/.bin/app-icon` pour l'exécuter.

### Builder pour le Google Play Store
Le fichier `keystore.properties` qui contient nos infos confidentielles n'est pas commit.
Il doit être placé à la racine du projet android.

Pour builder l'apk :
`./gradlew assembleRelease`