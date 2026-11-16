<script setup>
import { ref } from 'vue';
import CustomInput from '../Form/customInput.vue';
import CustomTextarea from '../Form/customTextarea.vue';
import CustomSelect from '../Form/customSelect.vue';
import CustomSubmit from '../Form/customSubmit.vue';

const API_URL = `${import.meta.env.VITE_API_URL}/api/contact`

const successMessage = ref('');
const errorMessage = ref('');
const sponsorshipTypes = ref([
	"Financier (Partenaire)",
	"Financier (Partenaire Premium)",
	"Financier (Partenaire Principal)",
	"Prêt de matériel",
	"Coup de main",
	"Relais du projet",
	"Don de fournitures",
	"Autre",
]);

const form = ref({
	firstname: '',
	lastname: '',
	email: '',
	message: '',
	details: {
		company: '',
		website: '',
		sponsorshipType: ''
	}
});

const checkDatas = () => {
	if (
		!form.value.firstname ||
		!form.value.lastname ||
		!form.value.email ||
		!form.value.message ||
		(!form.value.details.company && !form.value.details.website) ||
		!form.value.details.sponsorshipType
	) {
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

	if (!checkDatas()) return errorMessage.value = "Veuillez compléter tous les champs du formulaire.";

	try {
		const response = await fetch(API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				type: 'sponsor',
				name: form.value.firstname + " " + form.value.lastname,
				email: form.value.email,
				subject: "Demande de partenariat",
				message: form.value.message,
				details: {
					company: form.value.details.company,
					website: form.value.details.website,
					sponsorshipType: form.value.details.sponsorshipType
				}
			})
		})

		const data = await response.json()

		if (!response.ok) {
			throw new Error(data.message || 'Une erreur est survenue.')
		}

		successMessage.value = 'Votre message a bien été envoyé !'

		// Réinitialisation du formulaire
		form.value = {
			firstname: '',
			lastname: '',
			email: '',
			message: '',
			details: {
				company: '',
				website: '',
				sponsorshipType: ''
			}
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
			<CustomInput label="Nom" v-model="form.firstname" />
			<CustomInput label="Prénom" v-model="form.lastname" />
		</div>
		<CustomInput label="Email" v-model="form.email" />
		<CustomTextarea label="Votre demande" v-model="form.message" />
		<div class="flex">
			<CustomInput label="Entreprise" v-model="form.details.company" />
			<CustomInput label="Site Internet" v-model="form.details.website" />
		</div>
		<CustomSelect label="Type de sponsor" :datas="sponsorshipTypes" v-model="form.details.sponsorshipType" />
		<br>
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
	}
}

.error-msg {
	color: red;
}

.success-msg {
	color: green;
}
</style>