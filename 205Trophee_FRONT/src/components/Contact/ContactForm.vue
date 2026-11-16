<script setup>
import { ref } from 'vue';
import CustomInput from '../Form/customInput.vue';
import CustomSelect from '../Form/customSelect.vue';
import CustomTextarea from '../Form/customTextarea.vue';
import CustomSubmit from '../Form/customSubmit.vue';

const API_URL = `${import.meta.env.VITE_API_URL}/api/contact`

const successMessage = ref('');
const errorMessage = ref('');
const subjects = ref([
	"Demande d'information générale",
	"Partenariat / Sponsoring",
	"Boutique / Merchandising",
	"Le 205 Trophée 2027",
	"Presse / Communication",
	"Proposition de collaboration",
	"Autre demande",
]);

const form = ref({
	firstname: '',
	lastname: '',
	email: '',
	subject: '',
	message: ''
});

const checkDatas = () => {
	if (!form.value.firstname || !form.value.lastname || !form.value.email || !form.value.subject || !form.value.message) {
		errorMessage.value = "Veuillez compléter tous les champs du formulaire.";
		return false
	}
	errorMessage.value = "";
	return true;
}

const submitForm = async () => {
	// Réinitialisation des messages
	successMessage.value = ''
	errorMessage.value = ''

	if(!checkDatas()) return errorMessage.value = "Veuillez compléter tous les champs du formulaire.";

	try {
		const response = await fetch(API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				type: 'contact',
				name: form.value.firstname+" "+form.value.lastname,
				email: form.value.email,
				subject: form.value.subject,
				message: form.value.message
			})
		})

		const data = await response.json()

		if (!response.ok) {
			throw new Error(data.message || 'Une erreur est survenue.')
		}

		successMessage.value = 'Votre message a bien été envoyé !'

		// Réinitialisation du formulaire
		form.value = {
			name: '',
			email: '',
			subject: '',
			message: ''
		}

	} catch (error) {
		console.error('Erreur lors de l’envoi du formulaire :', error)
		errorMessage.value = error.message || 'Impossible de contacter le serveur.'
	}
}

</script>

<template>
	<div class="error-msg" v-if="errorMessage">{{ errorMessage }}</div>
	<div class="success-msg" v-if="successMessage">{{ successMessage }}</div>

	<form>
		<div class="flex">
			<CustomInput label="Nom" v-model="form.firstname" />
			<CustomInput label="Prénom" v-model="form.lastname" />
		</div>
		<CustomInput label="Email" v-model="form.email" />
		<CustomSelect label="Sujet" :datas="subjects" v-model="form.subject" />
		<CustomTextarea label="Votre demande" v-model="form.message" />
		<CustomSubmit label="Soumettre la demande" type="button" @click="submitForm" />
	</form>
</template>

<style scoped>
.flex {
	display: flex;
	gap: 1.7em;
}

@media (max-width: 1024px) {
	.flex {
		flex-direction: column;
		gap: 0;
	}
}

.error-msg {
	color: red;
}

.success-msg {
	color: green;
}
</style>