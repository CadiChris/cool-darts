package com.alkeya.cricket

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class RegistrationViewModel : ViewModel() {
    val players = MutableLiveData(listOf("A", "B", "C"))

    fun registerPlayer(player: String) {
        players.value =  players.value!!.plus(player)
    }
}