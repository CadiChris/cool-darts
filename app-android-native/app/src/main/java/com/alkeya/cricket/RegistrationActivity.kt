package com.alkeya.cricket

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.*
import androidx.databinding.DataBindingUtil
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import com.alkeya.cricket.databinding.ActivityRegistrationBinding

class RegistrationActivity : AppCompatActivity() {

    private val viewmodel by lazy { ViewModelProvider(this).get(RegistrationViewModel::class.java) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val binding: ActivityRegistrationBinding = DataBindingUtil.setContentView(
            this,
            R.layout.activity_registration
        )
        binding.lifecycleOwner = this


        bindPlayers(binding)
        bindRegistration(binding)
    }


    private fun bindPlayers(binding: ActivityRegistrationBinding) {
        val playersObserver = Observer<List<String>> { players ->
            // TODO: Trouver un moyen de ne pas recréer l'ArrayAdapter à chaque "Observe"
            binding.listViewPlayers.adapter =
                ArrayAdapter(this, android.R.layout.simple_list_item_1, players)
        }
        viewmodel.players.observe(this, playersObserver)
    }

    private fun bindRegistration(binding: ActivityRegistrationBinding) {
        binding.buttonRegisterPlayer.setOnClickListener {
            viewmodel.registerPlayer(binding.editTextPlayerName.text.toString())
        }
    }
}

// TODO
// [ ] Binder le nom de l'inscrit sur le viewmodel ?
// [ ] Vider le nom du joueur après l'inscription
// [ ] Interdire 2 joueurs avec le même nom
// [ ] Styliser le titre de l'app
// [ ] Ajouter les fonts

// [X] Remplacer les findViewById par du Data Binding
