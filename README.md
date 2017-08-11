Un arbitre de Cricket. :dart:  
https://en.wikipedia.org/wiki/Cricket_(darts)


<img align="left" src="https://github.com/cadichris/cricket/blob/master/stores/screenshots/inscription.png" width="150" />
<img src="https://github.com/cadichris/cricket/blob/master/stores/screenshots/partie_portrait.png" width="150" />

## Vocabulaire du Cricket
Ces termes sont utilisés par les joueurs de Cricket, et se trouvent donc dans le code de `cricket`.
 - Le **lanceur** est le joueur dont c'est le tour de lancer. Les autres joueurs sont les **adversaires**.
 - Le lanceur joue une **volée** : 3 lancers consécutifs.
 - Un **lancer** est le jet d'une fléchette vers la cible.
 - Lorsque le **lancer** atteint un **chiffre** de la cible, le nombre de **touches** du chiffre augmente.
 - Un lancer compte pour 1, 2 ou 3 touches selon que la fléchette est plantée dans le *simple*, le *double*, ou le *triple* du chiffre.
 - Au bout de 3 touches dans un chiffre, celui-ci devient **fermé**.
 - Si le lanceur touche un chiffre déjà fermé il inflige une **pénalité** aux adversaires n'ayant pas fermé ce chiffre.
 - Recevoir une pénalité fait augmenter le nombre de **points**. Au cricket, moins on a de points, mieux c'est.

## Règles du jeu implémentées par `cricket`
Le Cricket compte sûrement autant de règles que de pubs dans lesquels on y joue. Ce `cricket` implémente les règles de la variante `Cut Throat` :
> Les **chiffres** valides au Cricket vont du 15 au 20 plus le centre de la cible qui correspond au 25. Donc 6 chiffres au total.  
> Le but du jeu est d'être le premier à **fermer** tous ses chiffres, tout en ayant le moins de **points ** possibles. Autrement dit : le vainqueur est celui qui a **touché** 3 fois chaque chiffre et qui a reçu le moins de **pénalités**.  
> Chaque joueur démarre le jeu avec une cible vierge : aucune **touche** dans aucun **chiffre**, et 0 **points**.  
> Un tour complet correspond à 1 **volée** par joueur.  
> Un **lancer** dans un **chiffre** non valide n'a aucun effet, à part faire diminuer le nombre de lancer restant au joueur.  
> Un **lancer** dans un **chiffre** valide :
> - fait augmenter le nombre de **touches** du chiffre,
> - **ferme** le chiffre si le nombre de touches atteint 3  
> 
> Si le chiffre touché est fermé, une **pénalité** est infligée aux adversaires n'ayant pas fermé ce chiffre. Le nombre de points de la pénalité correspond à `(nombre de touches) * (valeur du chiffre)`. Donc un double 20 correspond à une pénalité de 40 points.  

### Exemple
Michael, Jim & Pam jouent ensemble.  
*Michael commence et lance :*
> - *Double 20* : les touches de son 20 passent à 2
> - *Triple 18* : son 18 est fermé
> - *Simple 14* : aucun effet  

*Jim lance :*
> - *Double 20* : les touches de son 20 passent à 2
> - *Double 20* à nouveau : la première touche permet de fermer son 20, la seconde inflige 20 points de pénalités aux adversaires
> - *Simple 12* : aucun effet  

*Pam lance :*
> - *Double 18* : les touches de son 18 passent à 2
> - *Triple 18* : la première touche ferme son 18, les 2 suivantes infligent 36 points (2x18) de pénalité à Jim. Aucune pénalité pour Michael puisqu'il a déjà fermé son 18.
> - *Simple 18* : à nouveau 18 points de pénalité pour Jim.

Après ce premier tour :
 - Michael a 2 touches dans le 20, le 18 fermé, et 20 points.
 - Jim a le 20 fermé et 54 points.
 - Pam a le 18 fermé et 20 points.
