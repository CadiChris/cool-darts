package com.alkeya.cricket

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.*

class RegistrationActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_registration)

        val arrayAdapter: ArrayAdapter<*>

        val players = mutableListOf<String>()

        var listViewPlayers = findViewById<ListView>(R.id.listViewPlayers)
        arrayAdapter = ArrayAdapter(this, android.R.layout.simple_list_item_1, players)
        listViewPlayers.adapter = arrayAdapter

        findViewById<Button>(R.id.buttonRegisterPlayer).setOnClickListener {
            players.add(findViewById<EditText>(R.id.editTextPlayerName).text.toString())
            arrayAdapter.notifyDataSetChanged()
        }
    }
}

// TODO
// [ ] Remplacer les findViewById par du Data Binding
// [ ] "Player..." devrait être le placeholder, pas le texte par défaut
// [ ] Vider le nom du joueur après l'inscription
// [ ] Interdire 2 joueurs avec le même nom
// [ ] Styliser le titre de l'app
// [ ] Ajouter les fonts