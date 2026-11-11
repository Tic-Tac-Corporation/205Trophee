<script setup>
import { FloatLabel, InputText, Select, Textarea, Button } from 'primevue';
import { ref } from 'vue';

const API_URL = `${import.meta.env.VITE_API_URL}/api/contact`

const successMessage = ref('');
const errorMessage = ref('');
const sponsorshipTypes = ref([
	{ label: "Financier (Partenaire)" },
	{ label: "Financier (Partenaire Premium)" },
	{ label: "Financier (Partenaire Principal)" },
	{ label: "Prêt de matériel" },
	{ label: "Coup de main" },
	{ label: "Relais du projet" },
	{ label: "Don de fournitures" },
	{ label: "Autre" },
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
					company: form.value.company,
					website: form.value.website,
					sponsorshipType: form.value.sponsorshipType
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

		<FloatLabel>
			<Textarea id="text" v-model="form.message" rows="5" cols="30" style="resize: none" fluid />
			<label for="text">Expliquez votre sponsorship en quelques mots</label>
		</FloatLabel>

		<br>

		<div class="flex">
			<FloatLabel>
				<InputText id="details.company" v-model="form.details.company" size="large" fluid />
				<label for="details.company">Entreprise</label>
			</FloatLabel>

			<FloatLabel>
				<InputText id="details.website" v-model="form.details.website" size="large" fluid />
				<label for="details.website">Site Internet</label>
			</FloatLabel>
		</div>

		<br>

		<FloatLabel class="w-full md:w-56">
			<Select v-model="form.details.sponsorshipType" inputId="sponsorshipType" :options="sponsorshipTypes"
				optionLabel="label" optionValue="label" fluid required />
			<label for="sponsorshipType">Type de sponsor</label>
		</FloatLabel>

		<br>

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