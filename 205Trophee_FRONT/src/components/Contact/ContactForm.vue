<script setup>
import { FloatLabel, InputText, Select, Textarea, Button } from 'primevue';
import { ref } from 'vue';

const API_URL = `${import.meta.env.VITE_API_URL}/api/contact`

const successMessage = ref('');
const errorMessage = ref('');
const subjects = ref([
	{ label: "Demande d'information générale" },
	{ label: "Partenariat / Sponsoring" },
	{ label: "Boutique / Merchandising" },
	{ label: "Le 205 Trophée 2027" },
	{ label: "Presse / Communication" },
	{ label: "Proposition de collaboration" },
	{ label: "Autre demande" },
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

	<br>

	<form>
		<div class="flex">
			<FloatLabel>
				<InputText id="firstname" v-model="form.firstname" size="large" fluid required />
				<label for="firstname">Nom</label>
			</FloatLabel>

			<FloatLabel>
				<InputText id="lastname" v-model="form.lastname" size="large" fluid required />
				<label for="lastname">Prénom</label>
			</FloatLabel>
		</div>

		<br>

		<FloatLabel>
			<InputText id="email" v-model="form.email" size="large" fluid required />
			<label for="email">Email</label>
		</FloatLabel>

		<br>

		<FloatLabel class="w-full md:w-56">
			<Select v-model="form.subject" inputId="subject" :options="subjects" optionLabel="label" optionValue="label"
				fluid required />
			<label for="subject">Sujet</label>
		</FloatLabel>

		<br>

		<FloatLabel>
			<Textarea id="text" v-model="form.message" rows="5" cols="30" style="resize: none" fluid />
			<label for="text">Votre demande</label>
		</FloatLabel>

		<Button @click="submitForm">Soumettre la demande</Button>
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
	}
}

.error-msg {
	color: red;
}

.success-msg {
	color: green;
}
</style>